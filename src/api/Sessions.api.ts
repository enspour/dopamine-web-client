import { axios } from "@utils";

import { SessionsGetAllResponseDto } from "@dto";

export class SessionsApi {
    static async getAll() {
        return await axios.get<SessionsGetAllResponseDto>("/api/v1/sessions");
    }

    static async remove(id: string) {
        return await axios.delete(`/api/v1/sessions/${id}`);
    }

    static async refresh() {
        return await axios.post("/api/v1/sessions/refresh");
    }
}
