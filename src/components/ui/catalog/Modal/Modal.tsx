import { CSSProperties, FC, ReactNode, memo, useRef } from "react";

import { useOutsideClick } from "@hooks/client";

import styles from "./Modal.module.scss";

interface ModalStyle {
    height?: string;
    maxHeight?: string;
    minHeight?: string;

    width?: string;
    maxWidth?: string;
    minWidth?: string;
}

const initialStyle: ModalStyle = {
    height: "100%",
    maxHeight: "inherit",
    minHeight: "inherit",

    width: "100%",
    maxWidth: "inherit",
    minWidth: "inherit",
};

interface ModalProps {
    children: ReactNode | ReactNode[];
    isOpen: boolean;
    close: () => void;
    style?: ModalStyle;
}

const Modal: FC<ModalProps> = ({
    children,
    isOpen,
    close,
    style = initialStyle,
}) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const click = useOutsideClick(modalRef, close);

    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.black} onClick={click}>
            <div className={styles.container}>
                <div ref={modalRef} style={getStyle(style)}>
                    {children}
                </div>
            </div>
        </div>
    );
};

const getStyle = (style: ModalStyle): CSSProperties => ({
    ...Object.assign({}, initialStyle, style),
});

export default memo(Modal);
