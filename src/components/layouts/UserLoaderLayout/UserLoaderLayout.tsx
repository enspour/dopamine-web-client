"use client";

import { FC, ReactNode, memo, useState } from "react";

import LoaderLayout from "../LoaderLayout/LoaderLayout";

import { useAppDispatch } from "@redux/hooks";
import { setUser } from "@redux/slices/user.slice";

import { SessionsApi, UsersApi } from "@api";

import { LoadingState } from "@interfaces";

interface UserLoaderLayoutProps {
    children: ReactNode;
    callback: (success: boolean, done: () => void) => void;
}

const UserLoaderLayout: FC<UserLoaderLayoutProps> = ({
    children,
    callback,
}) => {
    const [loading, setLoading] = useState<LoadingState>("loading");

    const dispatch = useAppDispatch();

    const done = () => setLoading("done");

    const loader = async () => {
        const response = await UsersApi.me();

        if (response.statusCode === 200) {
            dispatch(setUser(response.data.user));
            return callback(true, done);
        }

        if (response.statusCode === 401) {
            const { statusCode } = await SessionsApi.refresh();

            if (statusCode !== 200) {
                return callback(false, done);
            }

            const response = await UsersApi.me();

            if (response.statusCode === 200) {
                dispatch(setUser(response.data.user));
                return callback(true, done);
            }
        }

        return callback(false, done);
    };

    return (
        <LoaderLayout loading={loading} loader={loader}>
            {children}
        </LoaderLayout>
    );
};

export default memo(UserLoaderLayout);
