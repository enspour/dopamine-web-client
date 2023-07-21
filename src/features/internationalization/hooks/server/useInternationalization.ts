import {
    Internationalization,
    getInterMessages,
} from "@features/internationalization";

import { useLocate } from "./useLocate";

export const useInternationalization =
    async (): Promise<Internationalization> => {
        const locate = useLocate();
        const interMessages = await getInterMessages(locate);

        return {
            locate,
            interMessages,
        };
    };
