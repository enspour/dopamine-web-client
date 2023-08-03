import { CSSProperties, FC, memo } from "react";

import Input from "@components/ui/catalog/Input/Input";
import Switcher from "@components/ui/catalog/Switcher/Switcher";

import type { StepperStepProps } from "@components/ui/navigation/Stepper/Stepper";
import type { ExtraProps } from "../../Login/Login";

import { getThemePropertyValue, type ThemePalette } from "@features/theme";

import styles from "./CredentialsStep.module.scss";

type CredentialsStepProps = StepperStepProps & ExtraProps;

const CredentialsStep: FC<CredentialsStepProps> = ({
    credentialsState,
    palette,
}) => {
    const [credentials, setCredentials] = credentialsState;

    const setEmail = (email: string): void =>
        setCredentials((prev) => ({ ...prev, email }));

    const setPassword = (password: string): void =>
        setCredentials((prev) => ({ ...prev, password }));

    const setIsRemember = (isRemember: boolean) =>
        setCredentials((prev) => ({ ...prev, isRemember }));

    return (
        <div className={styles.step}>
            <div className={styles.step__title} style={getColorStyle(palette)}>
                Sign in with email
            </div>

            <div className={styles.step__fields}>
                <Input
                    value={credentials.email}
                    setValue={setEmail}
                    placeholder="Email"
                    palette={palette}
                />

                <Input
                    type="password"
                    value={credentials.password}
                    setValue={setPassword}
                    placeholder="Password"
                    palette={palette}
                />

                <div className={styles.step__switcher}>
                    <Switcher
                        value={credentials.isRemember}
                        setValue={setIsRemember}
                        label="Remember me"
                        palette={palette}
                    />
                </div>
            </div>
        </div>
    );
};

const getColorStyle = (palette: ThemePalette): CSSProperties => ({
    color: getThemePropertyValue("color", palette),
});

export default memo(CredentialsStep);
