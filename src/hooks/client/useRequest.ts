import { useRef, useState } from "react";

import { ApiResponse, LoadingState, RequestConfig } from "@interfaces";

export const useRequest = <TArgs extends any[], TResult = void>(
    request: (
        ...args: [...TArgs, RequestConfig]
    ) => Promise<ApiResponse<TResult>>
) => {
    const [loading, setLoading] = useState<LoadingState>("idle");

    const abortController = useRef(new AbortController());

    const waiter = useRef<Promise<ApiResponse<TResult>> | null>(null);
    const response = useRef<ApiResponse<TResult> | null>(null);

    const exec = async (...args: TArgs) => {
        const controller = new AbortController();
        abortController.current.abort();
        abortController.current = controller;

        const config: RequestConfig = {
            signal: controller.signal,
        };

        return await request(...args, config);
    };

    const run = async (...args: TArgs) => {
        setLoading("loading");

        waiter.current = exec(...args);

        response.current = await waiter.current;

        setLoading("done");

        return response.current;
    };

    const cancel = () => {
        setLoading("done");
        abortController.current.abort();
    };

    return {
        response: response.current,
        waiter: waiter.current,
        loading,
        run,
        cancel,
    };
};
