import { CSSProperties, FC, memo } from "react";

import type { StepperHeaderProps } from "@components/ui/navigation/Stepper/Stepper";

import type { ThemePalette } from "@services/Theme.service";

import { getThemePropertyValue } from "@utils";

import styles from "./SelectionStep.module.scss";

const SelectionHeader: FC<StepperHeaderProps> = ({ palette }) => {
    return (
        <div className={styles.header}>
            <div
                className={styles.header__title}
                style={getColorStyle(palette)}
            >
                Create account now
            </div>
        </div>
    );
};

const getColorStyle = (palette: ThemePalette): CSSProperties => ({
    color: getThemePropertyValue("color", palette),
});

export default memo(SelectionHeader);
