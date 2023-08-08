import { ApiResponse } from "@interfaces";

import { Request } from "./useRequest";

export const useRequestEvents = <TArgs extends any[], TResult = void>(
    request: Request<TArgs, TResult>
) => {
    const onRunning = (callback: () => void) => {
        const events = request.events;

        events.addEventListener("running", callback);

        return () => {
            events.removeEventListener("running", callback);
        };
    };

    const onFinished = (callback: (response: ApiResponse<TResult>) => void) => {
        const events = request.events;

        const handler = (e: CustomEvent<ApiResponse<TResult>>) => {
            callback(e.detail);
        };

        events.addEventListener("finished", handler as EventListener);

        return () => {
            events.removeEventListener("finished", handler as EventListener);
        };
    };

    return {
        onRunning,
        onFinished,
    };
};
