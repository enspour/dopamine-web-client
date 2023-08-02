"use client";

import { FC, ReactNode, memo, useEffect, useRef, useState } from "react";

import Loader from "@components/ui/catalog/Loader/Loader";

import { LoadingState } from "@interfaces";

import styles from "./LoaderLayout.module.scss";

export interface Loader {
    run: () => void | Promise<void>;
    message: string;
}

interface LoaderLayoutProps {
    children: ReactNode;
    loaders: Loader[];
}

const LoaderLayout: FC<LoaderLayoutProps> = ({ children, loaders }) => {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState<LoadingState>("loading");

    const initialized = useRef(false);

    const run = async () => {
        for (const loader of loaders) {
            setMessage(loader.message);
            await loader.run();
        }

        setLoading("done");
    };

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true;

            run();
        }
    }, []);

    if (loading === "loading") {
        return (
            <div className={styles.loader}>
                <div>{message}</div>
                <Loader />
            </div>
        );
    }

    return <>{children}</>;
};

export default memo(LoaderLayout);
