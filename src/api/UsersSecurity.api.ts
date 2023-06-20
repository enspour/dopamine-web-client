import { axios } from "@utils";

import { UpdateTFAByEmailDto } from "@dto";

export default class UsersSecurityApi {
    async updateTFAByEmail(data: UpdateTFAByEmailDto) {
        return await axios.put("/api/v1/users/security/TFA-by-email", data);
    }
}
