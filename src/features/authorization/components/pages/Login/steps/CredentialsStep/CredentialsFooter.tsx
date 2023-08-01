import { useRouter } from "next/navigation";
import { FC, memo } from "react";

import AsyncButton from "@components/ui/catalog/AsyncButton/AsyncButton";

import type { StepperFooterProps } from "@components/ui/navigation/Stepper/Stepper";
import type { ExtraProps } from "../../Login";

import { AuthApi } from "@features/authorization";

import { validateEmail, validatePassword } from "@utils";

import styles from "./CredentialsStep.module.scss";

type CredentialsFooterProps = StepperFooterProps & ExtraProps;

const CredentialsFooter: FC<CredentialsFooterProps> = ({
    next,
    credentialsState,
    palette,
}) => {
    const [credentials] = credentialsState;

    const router = useRouter();

    const handle = async () => {
        const response = await AuthApi.login(credentials);

        if (response.statusCode === 200) {
            const { security } = response.data;

            if (security.TFAByEmail) {
                next();
            } else {
                router.push("/browse");
            }
        }
    };

    return (
        <div className={styles.footer}>
            <div className={styles.footer__btn}>
                <AsyncButton
                    onClick={handle}
                    disabled={
                        !validateEmail(credentials.email) ||
                        !validatePassword(credentials.password)
                    }
                    palette={palette}
                >
                    Login
                </AsyncButton>
            </div>
        </div>
    );
};

export default memo(CredentialsFooter);
