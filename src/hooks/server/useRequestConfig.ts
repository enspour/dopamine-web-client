import { cookies } from "next/headers";

import { RequestConfig } from "@interfaces";

export const useRequestConfig = () => {
    const cookieStore = cookies();

    const cookie = cookieStore.getAll();

    const config: RequestConfig = {
        headers: {
            Cookie: cookie
                .map((item) => `${item.name}=${item.value}`)
                .join("; "),
        },
    };

    return config;
};
