import { api } from "@utils";

import { RequestConfig } from "@interfaces";

export class UserSecurityApi {
    static async updateTFAByEmail(value: boolean, config?: RequestConfig) {
        const url = "/api/v1/users/security/TFA-by-email";
        const data = { value };

        return await api.put(url, data, config);
    }
}
