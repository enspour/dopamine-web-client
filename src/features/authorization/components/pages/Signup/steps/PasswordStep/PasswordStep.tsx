import { CSSProperties, FC, memo } from "react";

import Input from "@components/ui/catalog/Input/Input";

import { type StepperStepProps } from "@components/ui/navigation/Stepper/Stepper";
import { type ExtraProps } from "../../Signup";

import { getThemePropertyValue, type ThemePalette } from "@features/theme";

import styles from "./PasswordStep.module.scss";

type PasswordStepProps = StepperStepProps & ExtraProps;

const PasswordStep: FC<PasswordStepProps> = ({
    credentialsState,
    passwordConfirmationState,
    palette,
}) => {
    const [credentials, setCredentials] = credentialsState;

    const [passwordConfirmation, setPasswordConfirmation] =
        passwordConfirmationState;

    const setPassword = (password: string): void =>
        setCredentials((prev) => ({ ...prev, password }));

    return (
        <div className={styles.step}>
            <div className={styles.step__title} style={getColorStyle(palette)}>
                Think up a password
            </div>

            <div style={getColorStyle(palette)}>{credentials.email}</div>

            <div className={styles.step__fields}>
                <Input
                    type="password"
                    value={credentials.password}
                    setValue={setPassword}
                    placeholder="Password"
                />

                <Input
                    type="password"
                    value={passwordConfirmation}
                    setValue={setPasswordConfirmation}
                    placeholder="Confirm Password"
                />
            </div>
        </div>
    );
};

const getColorStyle = (palette: ThemePalette): CSSProperties => ({
    color: getThemePropertyValue("color", palette),
});

export default memo(PasswordStep);
