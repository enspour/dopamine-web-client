import { axios } from "@utils";

import {
    LoginDto,
    LoginResponseDto,
    SignupConfirmEmailDto,
    SignupDto,
    SignupResendEmailDto,
} from "@dto";

export default class AuthApi {
    static async signup(data: SignupDto) {
        return await axios.post("/api/v1/auth/signup", data);
    }

    static async signupConfirmEmail(data: SignupConfirmEmailDto) {
        return await axios.post("/api/v1/auth/signup/email/confirm", data);
    }

    static async signupResendEmail(data: SignupResendEmailDto) {
        return await axios.post("/api/v1/auth/signup/email/confirm", data);
    }

    static async login(data: LoginDto) {
        return await axios.post<LoginResponseDto>("/api/v1/auth/login", data);
    }

    static async logout() {
        return await axios.post("/api/v1/auth/logout", {});
    }
}
