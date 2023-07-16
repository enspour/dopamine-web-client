"use client";

import { useRouter } from "next/navigation";
import { FC, ReactNode, memo, useEffect } from "react";

import { useRequest } from "@hooks/client";

import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { selectLoading, setUser } from "@redux/slices/user.slice";

import { SessionsApi, UsersApi } from "@api";

import { User } from "@interfaces";

interface UserLayoutProps {
    children: ReactNode;
    user: User | null;
}

const UserLayout: FC<UserLayoutProps> = ({ children, user }) => {
    const router = useRouter();

    const dispatch = useAppDispatch();

    const loading = useAppSelector(selectLoading);

    const refreshRequest = useRequest(SessionsApi.refresh);
    const meRequest = useRequest(UsersApi.me);

    const trySetUser = async () => {
        const response = await refreshRequest.run();

        if (response.statusCode === 200) {
            const response = await meRequest.run();

            if (response.statusCode === 200) {
                const { user } = response.data;
                return dispatch(setUser(user));
            }
        }

        if (response.statusCode === 0) {
            return;
        }

        router.push("/login");
    };

    useEffect(() => {
        if (user) {
            dispatch(setUser(user));
        } else {
            trySetUser();
        }
    }, []);

    return <>{loading === "loading" ? "loading" : children}</>;
};

export default memo(UserLayout);
