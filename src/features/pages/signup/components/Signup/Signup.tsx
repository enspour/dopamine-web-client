"use client";

import { Dispatch, SetStateAction, memo, useState } from "react";

import Box from "@components/ui/catalog/Box/Box";
import Stepper from "@components/ui/navigation/Stepper/Stepper";

import SelectionFooter from "../steps/SelectionStep/SelectionFooter";
import SelectionHeader from "../steps/SelectionStep/SelectionHeader";
import SelectionStep from "../steps/SelectionStep/SelectionStep";

import CredentialsFooter from "../steps/CredentialsStep/CredentialsFooter";
import CredentialsStep from "../steps/CredentialsStep/CredentialsStep";

import ConfirmEmailFooter from "../steps/ConfirmEmailStep/ConfirmEmailFooter";
import ConfirmEmailStep from "../steps/ConfirmEmailStep/ConfirmEmailStep";

import PasswordFooter from "../steps/PasswordStep/PasswordFooter";
import PasswordStep from "../steps/PasswordStep/PasswordStep";

import { CommonStepperHeader, type SignupDto } from "@features/authorization";

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
                    CommonStepperHeader,
                    CommonStepperHeader,
                    CommonStepperHeader,
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
    );
};

export default memo(Signup);
