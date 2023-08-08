import { useRef } from "react";

import { SessionsApi } from "@features/authorization";

import { ApiResponse, RequestConfig } from "@interfaces";

export interface Request<TArgs extends any[], TResult = void> {
    run: (...args: TArgs) => Promise<ApiResponse<TResult>>;
    cancel: () => void;
    events: EventTarget;
}

export const useRequest = <TArgs extends any[], TResult = void>(
    request: (
        ...args: [...TArgs, RequestConfig]
    ) => Promise<ApiResponse<TResult>>
): Request<TArgs, TResult> => {
    const eventTarget = useRef(new EventTarget());

    const abortController = useRef(new AbortController());

    const execRequest = async (...args: TArgs) => {
        const controller = new AbortController();
        abortController.current.abort();
        abortController.current = controller;

        const config: RequestConfig = {
            signal: controller.signal,
        };

        return await request(...args, config);
    };

    const runRequest = async (...args: TArgs) => {
        const result = await execRequest(...args);

        const { statusCode } = result;

        if (statusCode === 401) {
            const { statusCode } = await SessionsApi.refresh();

            if (statusCode === 200) {
                return await execRequest(...args);
            }
        }

        return result;
    };

    const run = async (...args: TArgs): Promise<ApiResponse<TResult>> => {
        const events = eventTarget.current;

        events.dispatchEvent(new Event("running"));

        const response = await runRequest(...args);

        const event = new CustomEvent("finished", {
            detail: response,
        });

        events.dispatchEvent(event);

        return response;
    };

    const cancel = (): void => {
        abortController.current.abort();
    };

    return {
        run,
        cancel,
        events: eventTarget.current,
    };
};
