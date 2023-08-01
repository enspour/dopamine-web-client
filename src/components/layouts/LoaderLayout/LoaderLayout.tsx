"use client";

import { FC, ReactNode, memo, useEffect, useRef, useState } from "react";

import Loader from "@components/ui/catalog/Loader/Loader";

import { LoadingState } from "@interfaces";

import styles from "./LoaderLayout.module.scss";

interface LoaderLayoutProps {
    children: ReactNode;
    loader: () => void | Promise<void>;
}

const LoaderLayout: FC<LoaderLayoutProps> = ({ children, loader }) => {
    const [loading, setLoading] = useState<LoadingState>("loading");

    const initialized = useRef(false);

    const run = async () => {
        await loader();

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
                <Loader />
            </div>
        );
    }

    return <>{children}</>;
};

export default memo(LoaderLayout);
