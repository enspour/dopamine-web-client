"use client";

import { FC, ReactNode, memo, useEffect, useRef } from "react";

import Loader from "@components/ui/catalog/Loader/Loader";

import { LoadingState } from "@interfaces";

import styles from "./LoaderLayout.module.scss";

interface LoaderLayoutProps {
    children: ReactNode;
    loading: LoadingState;
    loader: () => void;
}

const LoaderLayout: FC<LoaderLayoutProps> = ({ children, loading, loader }) => {
    const initialized = useRef(false);

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true;

            loader();
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

export default memo(LoaderLayout);
