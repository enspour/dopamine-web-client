import { useRouter } from "next/navigation";
import { FC, memo } from "react";

import AsyncButton from "@components/ui/catalog/AsyncButton/AsyncButton";

import type { StepperFooterProps } from "@components/ui/navigation/Stepper/Stepper";
import type { ExtraProps } from "../../Login/Login";

import { TwoFactorAuthApi } from "@features/authorization";

import styles from "./TwoFactorStep.module.scss";

type TwoFactorFooterProps = StepperFooterProps & ExtraProps;

const TwoFactorFooter: FC<TwoFactorFooterProps> = ({
    credentialsState,
    twoFactorCodeState,
    palette,
}) => {
    const router = useRouter();

    const [credentials] = credentialsState;
    const [code] = twoFactorCodeState;

    const handle = async () => {
        const response = await TwoFactorAuthApi.confirmByEmail({
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
                    disabled={code.trim().length !== 6}
                    palette={palette}
                >
                    Confirm
                </AsyncButton>
            </div>
        </div>
    );
};

export default memo(TwoFactorFooter);
