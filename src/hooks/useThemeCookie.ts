import { cookies } from "next/headers";

import type { Theme } from "@services/Theme.service";
import { COOKIE_NAME } from "@services/Theme.service";

const useThemeCookie = () => {
    const cookieStore = cookies();
    const theme = cookieStore.get(COOKIE_NAME)?.value || "light";

    return theme as Theme;
};

export { useThemeCookie };
