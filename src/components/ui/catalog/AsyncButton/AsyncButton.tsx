import { useState, FC, ReactNode, MouseEvent } from "react";

import Button from "../Button/Button";
import Loader from "../Loader/Loader";

import type { LoadingState } from "@interfaces";

import type { Palette } from "@services/Theme.service";

interface AsyncButtonProps {
    children: ReactNode | ReactNode[];
    onClick: (e: MouseEvent<HTMLButtonElement>) => Promise<void>;
    width?: string;
    disabled?: boolean;
    palette?: Palette;
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

export default AsyncButton;
