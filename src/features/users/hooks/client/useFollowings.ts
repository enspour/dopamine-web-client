import { useState } from "react";

import { useRequest, useRequestLoading } from "@hooks/client";
import { useUser } from "./useUser";

import { Followings, FollowingsApi } from "@features/users";

export const useFollowings = () => {
    const [followings, setFollowings] = useState<Followings>([]);

    const { user } = useUser();

    const request = useRequest(FollowingsApi.getAll);
    const loading = useRequestLoading(request, [followings]);

    const update = async (): Promise<boolean> => {
        const response = await request.run(user.id);

        if (response.statusCode === 200) {
            const { followings } = response.data;
            setFollowings(followings);

            return true;
        }

        return false;
    };

    return { followings, loading, update };
};
