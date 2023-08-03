import { useRef, useState } from "react";

import { SessionsApi } from "@features/authorization";

import { ApiResponse, LoadingState, RequestConfig } from "@interfaces";

export const useRequest = <TArgs extends any[], TResult = void>(
    request: (
        ...args: [...TArgs, RequestConfig]
    ) => Promise<ApiResponse<TResult>>
) => {
    const [loading, setLoading] = useState<LoadingState>("idle");

    const abortController = useRef(new AbortController());

    const response = useRef<Promise<ApiResponse<TResult>> | null>(null);

    const exec = async (...args: TArgs) => {
        const controller = new AbortController();
        abortController.current.abort();
        abortController.current = controller;

        const config: RequestConfig = {
            signal: controller.signal,
        };

        return await request(...args, config);
    };

    const runRequest = async (
        resolver: (result: ApiResponse<TResult>) => void,
        ...args: TArgs
    ) => {
        const result = await exec(...args);

        const { statusCode } = result;

        if (statusCode === 401) {
            const { statusCode } = await SessionsApi.refresh();

            if (statusCode === 200) {
                const result = await exec(...args);
                resolver(result);
                return setLoading("done");
            }
        }

        resolver(result);
        return setLoading("done");
    };

    const run = async (...args: TArgs): Promise<ApiResponse<TResult>> => {
        setLoading("loading");

        let resolver: (result: ApiResponse<TResult>) => void;

        const waiter = new Promise<ApiResponse<TResult>>(
            (resolve) => (resolver = resolve)
        );

        response.current = waiter;

        setTimeout(runRequest, 0, resolver!, ...args);

        return await response.current;
    };

    const cancel = () => {
        setLoading("done");
        abortController.current.abort();
    };

    return {
        response: response.current,
        loading,
        run,
        cancel,
    };
};
