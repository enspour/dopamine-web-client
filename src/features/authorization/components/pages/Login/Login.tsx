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

import TwoFactorFooter from "./steps/TwoFactorStep/TwoFactorFooter";
import TwoFactorStep from "./steps/TwoFactorStep/TwoFactorStep";

import type { ThemePalette } from "@services/Theme.service";

import { LoginDto } from "@dto";

import { getThemePropertyValue } from "@utils";

import styles from "./Login.module.scss";

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
        <div className={styles.login} style={getStyle("secondary")}>
            <Box style={{ width: "50rem", height: "41rem" }}>
                <Stepper
                    steps={[SelectionStep, CredentialsStep, TwoFactorStep]}
                    headers={[SelectionHeader, CommonHeader, CommonHeader]}
                    footers={[
                        SelectionFooter,
                        CredentialsFooter,
                        TwoFactorFooter,
                    ]}
                    extraProps={{ credentialsState, twoFactorCodeState }}
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

export default memo(Login);
