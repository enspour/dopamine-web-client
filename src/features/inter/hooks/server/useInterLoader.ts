import { Inter, getInterMessages } from "@features/inter";

import { useCookieLocate } from "./useCookieLocate";

export const useInterLoader = async (): Promise<Inter> => {
    const locate = useCookieLocate();
    const interMessages = await getInterMessages(locate);

    return {
        locate,
        interMessages,
    };
};
