import { CSSProperties, FC, MouseEvent, memo } from "react";

import { ThemePalette, getThemePropertyValue } from "@features/theme";

export interface SvgProps {
    fill: string;
}

interface IconProps {
    svg: FC<SvgProps>;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    color?: string;
    palette?: ThemePalette;
}

const Icon: FC<IconProps> = ({
    svg: Svg,
    onClick,
    color,
    palette = "primary",
}) => {
    const clickHandler = (e: MouseEvent<HTMLElement>) => {
        onClick?.call({}, e);
    };

    return (
        <div
            style={getStyle(onClick ? "pointer" : "auto")}
            onClick={clickHandler}
        >
            <Svg fill={color || getThemePropertyValue("icon", palette)} />
        </div>
    );
};

const getStyle = (cursor: "pointer" | "auto"): CSSProperties => ({
    display: "contents",
    cursor,
});

export default memo(Icon);
