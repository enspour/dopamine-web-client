import { FC, memo } from "react";

import Button from "@components/ui/catalog/Button/Button";
import Icon from "@components/ui/catalog/Icon/Icon";

import type { StepperHeaderProps } from "@components/ui/navigation/Stepper/Stepper";

import BackIcon from "@features/authorization/assets/icons/back.svg";

import styles from "./CommonHeader.module.scss";

const CommonHeader: FC<StepperHeaderProps> = ({ prev }) => {
    return (
        <div className={styles.header}>
            <div>
                <Button onClick={prev}>
                    <div className={styles.header__btn}>
                        <Icon svg={BackIcon} />
                    </div>
                </Button>
            </div>
        </div>
    );
};

export default memo(CommonHeader);
