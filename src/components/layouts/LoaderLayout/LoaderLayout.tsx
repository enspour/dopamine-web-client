"use client";

import { FC, ReactNode, memo, useState } from "react";

import Loader from "@components/ui/catalog/Loader/Loader";

import { LoadingState } from "@interfaces";

import styles from "./LoaderLayout.module.scss";

export interface RunnerProps {
    done: () => void;
    setMessage: (message: string) => void;
}

export type Runner = FC<RunnerProps>;

interface LoaderLayoutProps {
    children: ReactNode;
    runners: Runner[];
}

const LoaderLayout: FC<LoaderLayoutProps> = ({ children, runners }) => {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState<LoadingState>("loading");

    const [index, setIndex] = useState(0);

    const Runner = runners[index];

    const done = () => {
        if (index + 1 < runners.length) {
            setIndex((prev) => prev + 1);
        } else {
            setLoading("done");
        }
    };

    if (loading === "loading") {
        return (
            <div className={styles.loader}>
                <div>{message}</div>

                <Loader />

                <Runner done={done} setMessage={setMessage} />
            </div>
        );
    }

    return <>{children}</>;
};

export default memo(LoaderLayout);
