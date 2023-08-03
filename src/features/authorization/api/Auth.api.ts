import { api } from "@utils";

import { RequestConfig } from "@interfaces";

import {
    LoginDto,
    LoginResponseDto,
    SignupConfirmEmailDto,
    SignupDto,
    SignupResendEmailDto,
} from "@features/authorization";

export class AuthApi {
    static async signup(data: SignupDto, config?: RequestConfig) {
        const url = "/api/v1/auth/signup";
        return await api.post(url, data, config);
    }

    static async signupConfirmEmail(
        data: SignupConfirmEmailDto,
        config?: RequestConfig
    ) {
        const url = "/api/v1/auth/signup/email-confirmation";
        return await api.post(url, data, config);
    }

    static async signupResendEmail(
        data: SignupResendEmailDto,
        config?: RequestConfig
    ) {
        const url = "/api/v1/auth/signup/resend-email-confirmation";
        return await api.post(url, data, config);
    }

    static async login(data: LoginDto, config?: RequestConfig) {
        const url = "/api/v1/auth/login";
        return await api.post<LoginResponseDto>(url, data, config);
    }

    static async logout(config?: RequestConfig) {
        const url = "/api/v1/auth/logout";
        return await api.post(url, {}, config);
    }
}
