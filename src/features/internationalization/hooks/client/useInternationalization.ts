import { useEffect } from "react";

import { Internationalization } from "@features/internationalization";

import { useAppDispatch } from "@redux/hooks";
import { setInternationalization } from "@redux/slices/internationalization.slice";

export const useInternationalization = (
    internationalization: Internationalization
) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setInternationalization(internationalization));
    }, []);
};
