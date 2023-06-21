import { FC, memo } from "react";

import AsyncButton from "@components/ui/catalog/AsyncButton/AsyncButton";

import type { StepperFooterProps } from "@components/ui/navigation/Stepper/Stepper";
import type { ExtraProps } from "../../Signup";

import { validatePassword } from "@utils";

import { AuthApi } from "@api";

import styles from "./PasswordStep.module.scss";

type PasswordFooterProps = StepperFooterProps & ExtraProps;

const PasswordFooter: FC<PasswordFooterProps> = ({
    next,
    prev,
    credentialsState,
    passwordConfirmationState,
    palette,
}) => {
    const [credentials] = credentialsState;

    const [passwordConfirmation] = passwordConfirmationState;

    const handle = async () => {
        const response = await AuthApi.signup(credentials);

        if (response.statusCode === 201) {
            next();
        } else if (response.statusCode === 400) {
            const { message } = response;

            if (message === "Duplicate") {
                prev();
            }
        }
    };

    return (
        <div className={styles.footer}>
            <div className={styles.footer__btn}>
                <AsyncButton
                    onClick={handle}
                    disabled={
                        !validatePassword(credentials.password) ||
                        credentials.password !== passwordConfirmation
                    }
                    palette={palette}
                >
                    Continue
                </AsyncButton>
            </div>
        </div>
    );
};

export default memo(PasswordFooter);
