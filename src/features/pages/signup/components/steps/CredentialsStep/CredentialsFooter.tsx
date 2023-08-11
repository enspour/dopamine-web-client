import { FC, memo } from "react";

import AsyncButton from "@components/ui/catalog/AsyncButton/AsyncButton";

import type { StepperFooterProps } from "@components/ui/navigation/Stepper/Stepper";
import type { ExtraProps } from "../../Signup/Signup";

import { validateEmail } from "@features/authorization";

import styles from "./CredentialsStep.module.scss";

type CredentialsFooterProps = StepperFooterProps & ExtraProps;

const CredentialsFooter: FC<CredentialsFooterProps> = ({
    next,
    credentialsState,
    palette,
}) => {
    const [credentials] = credentialsState;

    const handle = async () => {
        next();
    };

    return (
        <div className={styles.footer}>
            <div className={styles.footer__btn}>
                <AsyncButton
                    onClick={handle}
                    disabled={
                        !validateEmail(credentials.email) ||
                        !credentials.nickname
                    }
                    palette={palette}
                >
                    Continue
                </AsyncButton>
            </div>
        </div>
    );
};

export default memo(CredentialsFooter);
