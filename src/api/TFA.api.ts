import { axios } from "@utils";

import { TFAConfirmByEmailDto, TFAResendEmailDto } from "@dto";

export class TwoFactorAuthApi {
    static async confirmByEmail(data: TFAConfirmByEmailDto) {
        return await axios.post("/api/v1/auth/TFA/confirm-by-email", data);
    }

    static async resendEmail(data: TFAResendEmailDto) {
        return await axios.post("/api/v1/auth/TFA/resend-email", data);
    }
}
