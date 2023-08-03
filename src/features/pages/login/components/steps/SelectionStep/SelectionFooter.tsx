import Link from "next/link";
import { CSSProperties, FC, memo } from "react";

import type { StepperFooterProps } from "@components/ui/navigation/Stepper/Stepper";
import type { ExtraProps } from "../../Login/Login";

import { getThemePropertyValue, type ThemePalette } from "@features/theme";

import styles from "./SelectionStep.module.scss";

type SelectionFooterProps = StepperFooterProps & ExtraProps;

const SelectionFooter: FC<SelectionFooterProps> = ({ palette }) => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__hint}>
                <span style={getColorStyle(palette)}>
                    Do you have account?&nbsp;
                </span>

                <Link href="/signup" style={getLinkStyle(palette)}>
                    Sign up
                </Link>
            </div>
        </div>
    );
};

const getLinkStyle = (palette: ThemePalette): CSSProperties => ({
    color: getThemePropertyValue("link", palette),
});

const getColorStyle = (palette: ThemePalette): CSSProperties => ({
    color: getThemePropertyValue("color", palette),
});

export default memo(SelectionFooter);
