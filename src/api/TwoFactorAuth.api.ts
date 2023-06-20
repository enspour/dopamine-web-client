import { axios } from "@utils";

import { TFAConfirmByEmailDto, TFAResendEmailDto } from "@dto";

export default class TwoFactorAuthApi {
    static async confirmByEmail(data: TFAConfirmByEmailDto) {
        return await axios.post("/api/v1/TFA/email/confirm", data);
    }

    static async resendEmail(data: TFAResendEmailDto) {
        return await axios.post("/api/v1/TFA/email/resend", data);
    }
}
