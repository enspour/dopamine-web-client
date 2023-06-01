import { FC, MouseEvent, ReactNode, memo, useState } from "react";

import Button from "../Button/Button";
import Loader from "../Loader/Loader";

import type { LoadingState } from "@interfaces";

import type { ThemePalette } from "@services/Theme.service";

interface AsyncButtonProps {
    children: ReactNode | ReactNode[];
    onClick: (e: MouseEvent<HTMLButtonElement>) => Promise<void>;
    width?: string;
    disabled?: boolean;
    palette?: ThemePalette;
}

const AsyncButton: FC<AsyncButtonProps> = ({
    children,
    onClick,
    width = "100%",
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
            disabled={disabled}
        >
            {loading === "loading" ? <Loader /> : children}
        </Button>
    );
};

export default memo(AsyncButton);
