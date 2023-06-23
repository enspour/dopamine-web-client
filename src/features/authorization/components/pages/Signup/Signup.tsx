"use client";

import { CSSProperties, Dispatch, SetStateAction, memo, useState } from "react";

import Box from "@components/ui/catalog/Box/Box";
import Stepper from "@components/ui/navigation/Stepper/Stepper";
import CommonHeader from "../../ui/CommonHeader/CommonHeader";

import SelectionFooter from "./steps/SelectionStep/SelectionFooter";
import SelectionHeader from "./steps/SelectionStep/SelectionHeader";
import SelectionStep from "./steps/SelectionStep/SelectionStep";

import CredentialsFooter from "./steps/CredentialsStep/CredentialsFooter";
import CredentialsStep from "./steps/CredentialsStep/CredentialsStep";

import ConfirmEmailFooter from "./steps/ConfirmEmailStep/ConfirmEmailFooter";
import ConfirmEmailStep from "./steps/ConfirmEmailStep/ConfirmEmailStep";

import PasswordFooter from "./steps/PasswordStep/PasswordFooter";
import PasswordStep from "./steps/PasswordStep/PasswordStep";

import type { ThemePalette } from "@services/Theme.service";

import { SignupDto } from "@dto";

import { getThemePropertyValue } from "@utils";

import styles from "./Signup.module.scss";

export interface ExtraProps {
    credentialsState: [SignupDto, Dispatch<SetStateAction<SignupDto>>];
    passwordConfirmationState: [string, Dispatch<SetStateAction<string>>];
    confirmationCodeState: [string, Dispatch<SetStateAction<string>>];
}

const Signup = () => {
    const credentialsState = useState<SignupDto>({
        nickname: "",
        email: "",
        password: "",
    });

    const passwordConfirmationState = useState("");

    const confirmationCodeState = useState(" ".repeat(6));

    return (
        <div className={styles.signup} style={getStyle("secondary")}>
            <Box style={{ width: "50rem", height: "41rem" }}>
                <Stepper
                    steps={[
                        SelectionStep,
                        CredentialsStep,
                        PasswordStep,
                        ConfirmEmailStep,
                    ]}
                    headers={[
                        SelectionHeader,
                        CommonHeader,
                        CommonHeader,
                        CommonHeader,
                    ]}
                    footers={[
                        SelectionFooter,
                        CredentialsFooter,
                        PasswordFooter,
                        ConfirmEmailFooter,
                    ]}
                    extraProps={{
                        credentialsState,
                        passwordConfirmationState,
                        confirmationCodeState,
                    }}
                    style={{ gap: "3rem" }}
                    palette="primary"
                />
            </Box>
        </div>
    );
};

const getStyle = (palette: ThemePalette): CSSProperties => ({
    backgroundColor: getThemePropertyValue("bg", palette),
});

export default memo(Signup);
