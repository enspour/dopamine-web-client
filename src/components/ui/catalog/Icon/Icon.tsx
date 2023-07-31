import { CSSProperties, FC, MouseEvent, memo } from "react";

import { getThemePropertyValue, type ThemePalette } from "@features/theme";

export interface SvgProps {
    fill: string;
}

interface IconStyle {
    color?: string;
    cursor?: "pointer" | "auto";
}

const initialStyle: IconStyle = {};

interface IconProps {
    svg: FC<SvgProps>;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    style?: IconStyle;
    palette?: ThemePalette;
}

const Icon: FC<IconProps> = ({
    svg: Svg,
    onClick,
    style = initialStyle,
    palette = "primary",
}) => {
    const clickHandler = (e: MouseEvent<HTMLElement>) => {
        onClick?.call({}, e);
    };

    return (
        <div style={getStyle(style)} onClick={clickHandler}>
            <Svg fill={style.color || getThemePropertyValue("icon", palette)} />
        </div>
    );
};

const getStyle = (style: IconStyle): CSSProperties => {
    const { color, ...styles } = Object.assign({}, initialStyle, style);

    return {
        display: "contents",
        ...styles,
    };
};

export default memo(Icon);
