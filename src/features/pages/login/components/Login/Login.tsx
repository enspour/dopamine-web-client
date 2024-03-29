"use client";

import { Dispatch, SetStateAction, memo, useState } from "react";

import Box from "@components/ui/catalog/Box/Box";
import Stepper from "@components/ui/navigation/Stepper/Stepper";

import SelectionFooter from "../steps/SelectionStep/SelectionFooter";
import SelectionHeader from "../steps/SelectionStep/SelectionHeader";
import SelectionStep from "../steps/SelectionStep/SelectionStep";

import CredentialsFooter from "../steps/CredentialsStep/CredentialsFooter";
import CredentialsStep from "../steps/CredentialsStep/CredentialsStep";

import TwoFactorFooter from "../steps/TwoFactorStep/TwoFactorFooter";
import TwoFactorStep from "../steps/TwoFactorStep/TwoFactorStep";

import { CommonStepperHeader, type LoginDto } from "@features/authorization";

export interface ExtraProps {
    credentialsState: [LoginDto, Dispatch<SetStateAction<LoginDto>>];
    twoFactorCodeState: [string, Dispatch<SetStateAction<string>>];
}

const Login = () => {
    const credentialsState = useState<LoginDto>({
        email: "",
        password: "",
        isRemember: false,
    });

    const twoFactorCodeState = useState(" ".repeat(6));

    return (
        <Box style={{ width: "50rem", height: "41rem" }}>
            <Stepper
                steps={[SelectionStep, CredentialsStep, TwoFactorStep]}
                headers={[
                    SelectionHeader,
                    CommonStepperHeader,
                    CommonStepperHeader,
                ]}
                footers={[SelectionFooter, CredentialsFooter, TwoFactorFooter]}
                extraProps={{ credentialsState, twoFactorCodeState }}
                style={{ gap: "3rem" }}
                palette="primary"
            />
        </Box>
    );
};

export default memo(Login);
