"use client";

import { FC, MouseEvent, ReactNode, memo, useState } from "react";

import Button from "../Button/Button";
import Loader from "../Loader/Loader";

import { type ThemePalette } from "@features/theme";

import type { LoadingState } from "@interfaces";

interface AsyncButtonProps {
    children: ReactNode | ReactNode[];
    onClick: (e: MouseEvent<HTMLButtonElement>) => Promise<void>;
    width?: string;
    height?: string;
    disabled?: boolean;
    palette?: ThemePalette;
}

const AsyncButton: FC<AsyncButtonProps> = ({
    children,
    onClick,
    width = "100%",
    height = "3.5rem",
    disabled = false,
    palette,
}) => {
    const [loading, setLoading] = useState<LoadingState>("idle");

    const clickHandler = async (e: MouseEvent<HTMLButtonElement>) => {
        if (loading === "loading") {
            return;
        }

        setLoading("loading");

        await onClick(e);

        setLoading("done");
    };

    return (
        <Button
            onClick={clickHandler}
            palette={palette}
            width={width}
            height={height}
            disabled={disabled}
        >
            {loading === "loading" ? <Loader /> : children}
        </Button>
    );
};

export default memo(AsyncButton);
