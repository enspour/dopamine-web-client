import { memo, FC, MouseEvent, CSSProperties } from "react";

import { getProperty } from "@utils";

interface SvgProps {
    fill: string;
}

interface IconProps {
    svg: FC<SvgProps>;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    color?: string;
}

const Icon: FC<IconProps> = ({
    svg: Svg,
    onClick,
    color = getProperty("icon", "primary"),
}) => {
    const clickHandler = (e: MouseEvent<HTMLElement>) => {
        onClick?.call({}, e);
    };

    return (
        <div
            style={getStyle(onClick ? "pointer" : "auto")}
            onClick={clickHandler}
        >
            <Svg fill={color} />
        </div>
    );
};

const getStyle = (cursor: "pointer" | "auto"): CSSProperties => ({
    display: "contents",
    cursor,
});

export default memo(Icon);
