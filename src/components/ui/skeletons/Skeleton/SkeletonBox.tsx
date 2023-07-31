import { CSSProperties, FC, ReactNode } from "react";

import styles from "./Skeleton.module.scss";

interface SkeletonBoxStyle {
    maxWidth?: string;
    minWidth?: string;
    width?: string;
    maxHeight?: string;
    minHeight?: string;
    height?: string;
    borderRadius?: string;
}

const initialStyle: SkeletonBoxStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "0rem",
};

interface SkeletonBoxProps {
    children?: ReactNode | ReactNode[];
    style?: SkeletonBoxStyle;
}

const SkeletonBox: FC<SkeletonBoxProps> = ({
    children,
    style = initialStyle,
}) => {
    return (
        <div className={styles.skeleton__box} style={getStyles(style)}>
            {children}
        </div>
    );
};

const getStyles = (style: SkeletonBoxStyle): CSSProperties => ({
    ...Object.assign({}, initialStyle, style),
});

export default SkeletonBox;
