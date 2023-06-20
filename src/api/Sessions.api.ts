import { Sessions } from "@interfaces";

import { axios } from "@utils";

export default class SessionsApi {
    static async getAll() {
        return await axios.get<Sessions>("/api/v1/sessions");
    }

    static async remove(id: string) {
        return await axios.delete(`/api/v1/sessions/${id}`);
    }
}
