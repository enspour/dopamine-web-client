import { api } from "@utils";

import { RequestConfig } from "@interfaces";

import { TFAConfirmByEmailDto, TFAResendEmailDto } from "@dto";

export class TwoFactorAuthApi {
    static async confirmByEmail(
        data: TFAConfirmByEmailDto,
        config?: RequestConfig
    ) {
        const url = "/api/v1/auth/TFA/confirm-by-email";
        return await api.post(url, data, config);
    }

    static async resendEmail(data: TFAResendEmailDto, config?: RequestConfig) {
        const url = "/api/v1/auth/TFA/resend-email";
        return await api.post(url, data, config);
    }
}
