import LoginDto from "./auth/Login.dto";
import LoginResponseDto from "./auth/LoginResponse.dto";
import SignupDto from "./auth/Signup.dto";
import SignupConfirmEmailDto from "./auth/SignupConfirmEmail.dto";
import SignupResendEmailDto from "./auth/SignupResendEmail.dto";

import TFAConfirmByEmailDto from "./twoFactorAuth/TFAConfirmByEmail.dto";
import TFAResendEmailDto from "./twoFactorAuth/TFAResendEmail.dto";

import AddEmailDto from "./usersEmails/AddEmail.dto";
import ConfirmEmailDto from "./usersEmails/ConfirmEmail.dto";

import UpdateTFAByEmailDto from "./usersSecurity/UpdateTFAByEmail.dto";

export type {
    AddEmailDto,
    ConfirmEmailDto,
    LoginDto,
    LoginResponseDto,
    SignupConfirmEmailDto,
    SignupDto,
    SignupResendEmailDto,
    TFAConfirmByEmailDto,
    TFAResendEmailDto,
    UpdateTFAByEmailDto,
};
