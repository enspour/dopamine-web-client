import { useState } from "react";

import { useRequest } from "@hooks/client";
import { useUser } from "./useUser";

import { Followings, FollowingsApi } from "@features/users";

export const useFollowings = () => {
    const { user } = useUser();

    const [followings, setFollowings] = useState<Followings>([]);

    const request = useRequest(FollowingsApi.getAll);

    const update = async () => {
        const response = await request.run(user.id);

        if (response.statusCode === 200) {
            const { followings } = response.data;
            setFollowings(followings);

            return true;
        }

        return false;
    };

    return { followings, update, request };
};
