import { CSSProperties, FC, ReactNode, memo } from "react";

interface DualPaneWindowStyle {
    width: string;
    minWidth?: string;
}

interface DualPaneWindowProps {
    children: ReactNode;
    style: DualPaneWindowStyle;
}

const DualPaneWindow: FC<DualPaneWindowProps> = ({ children, style }) => {
    return <div style={getStyle(style)}>{children}</div>;
};

const getStyle = (style: DualPaneWindowStyle): CSSProperties => ({
    ...style,
});

export default memo(DualPaneWindow);
