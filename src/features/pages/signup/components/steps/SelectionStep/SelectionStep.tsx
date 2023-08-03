import Image from "next/image";
import { FC, memo } from "react";

import AsyncButton from "@components/ui/catalog/AsyncButton/AsyncButton";
import Button from "@components/ui/catalog/Button/Button";

import type { StepperStepProps } from "@components/ui/navigation/Stepper/Stepper";

import GoogleImage from "@features/authorization/assets/images/google.png";
import MailImage from "@features/authorization/assets/images/mail.png";
import VkImage from "@features/authorization/assets/images/vk.png";
import YandexImage from "@features/authorization/assets/images/yandex.png";

import styles from "./SelectionStep.module.scss";

const SelectionStep: FC<StepperStepProps> = ({ next, palette }) => {
    const google = async () => {};

    const vk = async () => {};

    const yandex = async () => {};

    const email = () => {
        next();
    };

    return (
        <div className={styles.step}>
            <AsyncButton
                onClick={google}
                width="25rem"
                height="4rem"
                palette={palette}
            >
                <div className={styles.step__btn}>
                    <Image
                        src={GoogleImage}
                        alt="google"
                        width={25}
                        height={25}
                    />

                    <div>Sign up with Google</div>
                </div>
            </AsyncButton>

            <AsyncButton
                onClick={yandex}
                width="25rem"
                height="4rem"
                palette={palette}
            >
                <div className={styles.step__btn}>
                    <Image
                        src={YandexImage}
                        alt="yandex"
                        width={25}
                        height={25}
                    />

                    <div>Sign up with Yandex</div>
                </div>
            </AsyncButton>

            <AsyncButton
                onClick={vk}
                width="25rem"
                height="4rem"
                palette={palette}
            >
                <div className={styles.step__btn}>
                    <Image src={VkImage} alt="vk" width={25} height={25} />

                    <div>Sign up with VK</div>
                </div>
            </AsyncButton>

            <Button
                onClick={email}
                width="25rem"
                height="4rem"
                palette={palette}
            >
                <div className={styles.step__btn}>
                    <Image src={MailImage} alt="mail" width={25} height={25} />

                    <div>Sign up with Email</div>
                </div>
            </Button>
        </div>
    );
};

export default memo(SelectionStep);
