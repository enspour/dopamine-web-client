import { CSSProperties, FC, ReactNode, useEffect, useRef } from "react";

import { getThemePropertyValue, type ThemePalette } from "@features/theme";

import styles from "./Skeleton.module.scss";

interface SkeletonCircleStyle {
    diameter?: string;
}

const initialStyle: SkeletonCircleStyle = {
    diameter: "100%",
};

interface SkeletonCircleProps {
    children?: ReactNode | ReactNode[];
    style?: SkeletonCircleStyle;
    palette?: ThemePalette;
}

const SkeletonCircle: FC<SkeletonCircleProps> = ({
    children,
    style = initialStyle,
    palette = "primary",
}) => {
    const circleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const circle = circleRef.current;

        if (circle) {
            circle.style.setProperty(
                "--bg",
                getThemePropertyValue("skeleton-bg", palette)
            );

            circle.style.setProperty(
                "--line-color",
                getThemePropertyValue("skeleton-line-color")
            );
        }
    }, []);

    return (
        <div
            ref={circleRef}
            className={styles.skeleton__circle}
            style={getCircleStyles(style)}
        >
            {children}
        </div>
    );
};

const getCircleStyles = (style: SkeletonCircleStyle): CSSProperties => {
    const { diameter } = Object.assign({}, initialStyle, style);

    return {
        width: diameter,
        height: diameter,
    };
};

export default SkeletonCircle;
