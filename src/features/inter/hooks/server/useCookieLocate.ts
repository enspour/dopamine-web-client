import { cookies } from "next/headers";

import { isLocate, Locate, LOCATE_COOKIE_PATH } from "@features/inter";

export const useCookieLocate = (): Locate => {
    const cookiesStore = cookies();

    const locate = cookiesStore.get(LOCATE_COOKIE_PATH)?.value;

    if (locate && isLocate(locate)) {
        return locate;
    }

    return "en-US";
};
