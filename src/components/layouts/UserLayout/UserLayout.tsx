"use client";

import { useRouter } from "next/navigation";
import { FC, ReactNode, memo, useEffect, useRef } from "react";

import Loader from "@components/ui/catalog/Loader/Loader";

import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { selectLoading, setUser } from "@redux/slices/user.slice";

import { SessionsApi, UsersApi } from "@api";

import { User } from "@interfaces";

import styles from "./UserLayout.module.scss";

interface UserLayoutProps {
    children: ReactNode;
    user: User | null;
}

const UserLayout: FC<UserLayoutProps> = ({ children, user }) => {
    const initialized = useRef(false);

    const router = useRouter();

    const dispatch = useAppDispatch();

    const loading = useAppSelector(selectLoading);

    const trySetUser = async () => {
        const response = await SessionsApi.refresh();

        if (response.statusCode === 200) {
            const response = await UsersApi.me();

            if (response.statusCode === 200) {
                const { user } = response.data;
                return dispatch(setUser(user));
            }
        }

        router.push("/login");
    };

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true;

            if (user) {
                dispatch(setUser(user));
            } else {
                trySetUser();
            }
        }
    }, []);

    if (loading === "loading") {
        return (
            <div className={styles.loader}>
                <Loader />
            </div>
        );
    }

    return <>{children}</>;
};

export default memo(UserLayout);
