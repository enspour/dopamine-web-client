import { DependencyList, useEffect, useState } from "react";

import { Request } from "./useRequest";

import { ApiResponse, LoadingState } from "@interfaces";
import { useRequestEvents } from "./useRequestEvents";

export const useRequestLoading = <TArgs extends any[], TResult = void>(
    request: Request<TArgs, TResult>,
    deps: DependencyList
) => {
    const { onRunning, onFinished } = useRequestEvents(request);

    const [loading, setLoading] = useState<LoadingState>("idle");

    const running = () => {
        setLoading("loading");
    };

    const finished = <T>(response: ApiResponse<T>) => {
        if (response.statusCode === 200) {
            setLoading("done");
        } else {
            setLoading("error");
        }
    };

    useEffect(() => {
        const offRunning = onRunning(running);
        const offFinished = onFinished(finished);

        return () => {
            offRunning();
            offFinished();
        };
    }, []);

    useEffect(() => {
        if (loading === "done") {
            setLoading("idle");
        }
    }, deps);

    return loading;
};
