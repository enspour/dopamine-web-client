import { axios } from "@utils";

export class UsersSecurityApi {
    static async updateTFAByEmail(value: boolean) {
        return await axios.put("/api/v1/users/security/TFA-by-email", {
            value,
        });
    }
}
