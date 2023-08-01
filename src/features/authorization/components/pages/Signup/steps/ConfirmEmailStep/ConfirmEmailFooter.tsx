import { useRouter } from "next/navigation";
import { FC, memo } from "react";

import AsyncButton from "@components/ui/catalog/AsyncButton/AsyncButton";

import type { StepperFooterProps } from "@components/ui/navigation/Stepper/Stepper";
import type { ExtraProps } from "../../Signup";

import { AuthApi } from "@features/authorization";

import styles from "./ConfirmEmailStep.module.scss";

type ConfirmEmailFooterProps = StepperFooterProps & ExtraProps;

const ConfirmEmailFooter: FC<ConfirmEmailFooterProps> = ({
    credentialsState,
    confirmationCodeState,
    palette,
}) => {
    const [credentials] = credentialsState;
    const [code] = confirmationCodeState;

    const router = useRouter();

    const handle = async () => {
        const response = await AuthApi.signupConfirmEmail({
            email: credentials.email,
            password: credentials.password,
            code,
        });

        if (response.statusCode === 200) {
            router.push("/browse");
        }
    };

    return (
        <div className={styles.footer}>
            <div className={styles.footer__btn}>
                <AsyncButton
                    onClick={handle}
                    palette={palette}
                    disabled={code.trim().length !== 6}
                >
                    Confirm
                </AsyncButton>
            </div>
        </div>
    );
};

export default memo(ConfirmEmailFooter);
