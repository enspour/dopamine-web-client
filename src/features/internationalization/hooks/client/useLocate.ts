"use client";

import cookies from "js-cookie";

import { useAppDispatch, useAppSelector } from "@redux/hooks";
import {
    selectLocate,
    setInterMessages,
    setLocate,
} from "@redux/slices/internationalization.slice";

import { Locate, getInterMessages } from "@features/internationalization";

import { LOCATE_COOKIE_PATH } from "../../constants";

export const useLocate = () => {
    const locate = useAppSelector(selectLocate);

    const dispatch = useAppDispatch();

    const update = async (locate: Locate) => {
        const interMessages = await getInterMessages(locate);

        dispatch(setLocate(locate));
        dispatch(setInterMessages(interMessages));

        cookies.set(LOCATE_COOKIE_PATH, locate);
    };

    return [locate, update] as const;
};
