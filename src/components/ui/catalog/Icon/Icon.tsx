import { memo, FC, MouseEvent, CSSProperties } from "react";

import { getThemeValue } from "@utils";

import type { Palette } from "@services/Theme.service";

interface SvgProps {
    fill: string;
}

interface IconProps {
    svg: FC<SvgProps>;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    color?: string;
    palette?: Palette;
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
            <Svg fill={color || getThemeValue("icon", palette)} />
        </div>
    );
};

const getStyle = (cursor: "pointer" | "auto"): CSSProperties => ({
    display: "contents",
    cursor,
});

export default memo(Icon);
