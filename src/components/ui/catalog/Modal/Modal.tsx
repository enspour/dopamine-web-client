import { CSSProperties, FC, ReactNode, memo, useRef } from "react";

import { useOutsideClickHandler } from "@hooks/client";

import styles from "./Modal.module.scss";

interface ModalProps {
    children: ReactNode | ReactNode[];

    isOpen: boolean;
    close: () => void;

    height?: string;
    maxHeight?: string;
    minHeight?: string;

    width?: string;
    maxWidth?: string;
    minWidth?: string;
}

const Modal: FC<ModalProps> = ({
    children,

    isOpen,
    close,

    height = "100%",
    maxHeight = "inherit",
    minHeight = "inherit",

    width = "100%",
    maxWidth = "inherit",
    minWidth = "inherit",
}) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const handleClick = useOutsideClickHandler(modalRef, close);

    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.black} onClick={handleClick}>
            <div className={styles.container}>
                <div
                    ref={modalRef}
                    style={getStyle(
                        height,
                        maxHeight,
                        minHeight,
                        width,
                        maxWidth,
                        minWidth
                    )}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

const getStyle = (
    height: string,
    maxHeight: string,
    minHeight: string,

    width: string,
    maxWidth: string,
    minWidth: string
): CSSProperties => ({
    height,
    maxHeight,
    minHeight,

    width,
    maxWidth,
    minWidth,
});

export default memo(Modal);
