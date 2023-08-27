import { useEffect, useRef, useState } from "react";

import { useRequest } from "@hooks/client";

import { FileMetadata, StorageApi } from "@features/files";

export const useFilesUploader = (handler: (file: FileMetadata) => void) => {
    const [status, setStatus] = useState<"idle" | "start" | "working">("idle");

    const queue = useRef<File[]>([]);

    const request = useRequest(StorageApi.upload);

    const upload = (...files: File[]) => {
        queue.current = [...queue.current, ...files];

        if (status === "idle") {
            setStatus("start");
        }
    };

    const work = async () => {
        setStatus("working");

        while (queue.current.length !== 0) {
            const file = queue.current[0];
            queue.current = queue.current.slice(1);

            const data = new FormData();

            data.append(file.name, file);

            const response = await request.run(data);

            if (response.statusCode === 200) {
                const { file } = response.data;
                handler(file);
            }
        }

        setStatus("idle");
    };

    useEffect(() => {
        if (status === "idle") {
            if (queue.current.length !== 0) {
                setStatus("start");
            }
        }

        if (status === "start") {
            work();
        }
    }, [status]);

    return { upload };
};
