import { useEffect } from "react";

import { Inter } from "@features/inter";
import { setInter } from "@features/inter/redux";

import { useAppDispatch } from "@redux/hooks";

export const useInterInitializer = (inter: Inter) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setInter(inter));
    }, []);
};
