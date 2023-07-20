import { CSSProperties, FC, memo } from "react";

import Code from "@components/ui/catalog/Code/Code";
import type { StepperStepProps } from "@components/ui/navigation/Stepper/Stepper";

import type { ExtraProps } from "../../Signup";

import { ThemePalette, getThemePropertyValue } from "@features/theme";

import styles from "./ConfirmEmailStep.module.scss";

type ConfirmEmailStepProps = StepperStepProps & ExtraProps;

const ConfirmEmailStep: FC<ConfirmEmailStepProps> = ({
    confirmationCodeState,
    credentialsState,
    palette,
}) => {
    const [credentials] = credentialsState;

    const [code, setCode] = confirmationCodeState;

    const resend = () => {};

    return (
        <div className={styles.step}>
            <div className={styles.step__title} style={getColorStyle(palette)}>
                Enter code from email
            </div>

            <div style={getColorStyle(palette)}>{credentials.email}</div>

            <Code code={code} setCode={setCode} />

            <div className={styles.step__hint}>
                <span style={getColorStyle(palette)}>
                    Didn't receive message?&nbsp;
                </span>

                <span
                    className={styles.step__hint__resend}
                    style={getColorLinkStyle(palette)}
                    onClick={resend}
                >
                    Resend
                </span>
            </div>
        </div>
    );
};

const getColorStyle = (palette: ThemePalette): CSSProperties => ({
    color: getThemePropertyValue("color", palette),
});

const getColorLinkStyle = (palette: ThemePalette): CSSProperties => ({
    color: getThemePropertyValue("link", palette),
});

export default memo(ConfirmEmailStep);
