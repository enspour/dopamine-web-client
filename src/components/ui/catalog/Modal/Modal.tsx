import { memo, FC, ReactNode, RefObject } from "react";

import Box from "../Box/Box";

import type { ThemePalette } from "@services/Theme.service";

import styles from "./Modal.module.scss";

interface ModalProps {
    children: ReactNode | ReactNode[];
    modalRef: RefObject<HTMLDivElement>;

    isOpen: boolean;

    height?: string;
    maxHeight?: string;
    minHeight?: string;

    width?: string;
    maxWidth?: string;
    minWidth?: string;

    palette?: ThemePalette;
}

const Modal: FC<ModalProps> = ({
    children,

    modalRef,
    isOpen,

    height = "100%",
    maxHeight = "inherit",
    minHeight = "inherit",

    width = "100%",
    maxWidth = "inherit",
    minWidth = "inherit",

    palette = "primary",
}) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Box
                    height={height}
                    maxHeight={maxHeight}
                    minHeight={minHeight}
                    width={width}
                    maxWidth={maxWidth}
                    minWidth={minWidth}
                    palette={palette}
                >
                    <div ref={modalRef} className={styles.modal}>
                        {children}
                    </div>
                </Box>
            </div>
        </div>
    );
};

export default memo(Modal);
