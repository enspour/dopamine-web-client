"use client";

import cookies from "js-cookie";

import { useAppDispatch, useAppSelector } from "@redux/hooks";
import {
    selectLocate,
    setLocate,
} from "@redux/slices/internationalization.slice";

import { Locate } from "@features/internationalization/interfaces";

import { LOCATE_COOKIE_PATH } from "../../constants";

export const useLocate = () => {
    const locate = useAppSelector(selectLocate);

    const dispatch = useAppDispatch();

    const set = (locate: Locate) => {
        dispatch(setLocate(locate));
        cookies.set(LOCATE_COOKIE_PATH, locate);
    };

    return [locate, set];
};
