import { useState } from "react";

import { useRequest, useRequestLoading } from "@hooks/client";

import { User, UsersApi, getDefaultUser } from "@features/users";

export const useUserById = (id: number) => {
    const [user, setUser] = useState<User>(getDefaultUser());

    const request = useRequest(UsersApi.getOne);
    const loading = useRequestLoading(request, [user]);

    const update = async (): Promise<boolean> => {
        const response = await request.run(id);

        if (response.statusCode === 200) {
            const { user } = response.data;
            setUser(user);

            return true;
        }

        return false;
    };

    return { user, loading, update };
};
