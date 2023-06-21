import { CSSProperties, FC, memo } from "react";

import Input from "@components/ui/catalog/Input/Input";

import type { StepperStepProps } from "@components/ui/navigation/Stepper/Stepper";
import type { ExtraProps } from "../../Signup";

import type { ThemePalette } from "@services/Theme.service";

import { getThemePropertyValue } from "@utils";

import styles from "./CredentialsStep.module.scss";

type CredentialsStepProps = StepperStepProps & ExtraProps;

const CredentialsStepStep: FC<CredentialsStepProps> = ({
    credentialsState,
    palette,
}) => {
    const [credentials, setCredentials] = credentialsState;

    const setName = (name: string): void =>
        setCredentials((prev) => ({ ...prev, nickname: name }));

    const setEmail = (email: string): void =>
        setCredentials((prev) => ({ ...prev, email }));

    return (
        <div className={styles.step}>
            <div className={styles.step__title} style={getColorStyle(palette)}>
                Sign up with email
            </div>

            <div style={getColorStyle(palette)}>Fill in all the fields</div>

            <div className={styles.step__fields}>
                <Input
                    type="text"
                    value={credentials.nickname}
                    setValue={setName}
                    placeholder="Nickname"
                />

                <Input
                    type="text"
                    value={credentials.email}
                    setValue={setEmail}
                    placeholder="Email"
                />
            </div>
        </div>
    );
};

const getColorStyle = (palette: ThemePalette): CSSProperties => ({
    color: getThemePropertyValue("color", palette),
});

export default memo(CredentialsStepStep);
