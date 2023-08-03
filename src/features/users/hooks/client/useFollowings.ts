import { useRequest } from "@hooks/client";
import { useUser } from "./useUser";

import { useAppDispatch, useAppSelector } from "@redux/hooks";

import { FollowingsApi } from "@features/users";
import { selectFollowings, setFollowings } from "@features/users/client";

export const useFollowings = () => {
    const { user } = useUser();

    const followings = useAppSelector(selectFollowings);

    const dispatch = useAppDispatch();

    const request = useRequest(FollowingsApi.getAll);

    const update = async () => {
        const response = await request.run(user.id);

        if (response.statusCode === 200) {
            const { followings } = response.data;
            dispatch(setFollowings(followings));

            return true;
        }

        return false;
    };

    return { followings, update, request };
};
