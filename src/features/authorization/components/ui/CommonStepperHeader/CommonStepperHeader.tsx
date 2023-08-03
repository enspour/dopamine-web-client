"use client";

import { FC, memo } from "react";

import Button from "@components/ui/catalog/Button/Button";
import Icon from "@components/ui/catalog/Icon/Icon";

import type { StepperHeaderProps } from "@components/ui/navigation/Stepper/Stepper";

import BackIcon from "@features/authorization/assets/icons/back.svg";

import styles from "./CommonStepperHeader.module.scss";

const CommonStepperHeader: FC<StepperHeaderProps> = ({ prev }) => {
    return (
        <div className={styles.header}>
            <Button onClick={prev} width="15rem">
                <div className={styles.header__btn}>
                    <Icon svg={BackIcon} />
                    <div>previous</div>
                </div>
            </Button>
        </div>
    );
};

export default memo(CommonStepperHeader);
