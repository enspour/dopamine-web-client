import { useRequest } from "@hooks/client";
import { useUser } from "./useUser";

import { useAppDispatch, useAppSelector } from "@redux/hooks";

import { FollowingsApi } from "@features/users";
import { selectFollowingIds, setFollowingIds } from "@features/users/client";

export const useFollowingIds = () => {
    const { user } = useUser();

    const followingIds = useAppSelector(selectFollowingIds);

    const dispatch = useAppDispatch();

    const request = useRequest(FollowingsApi.getAll);

    const update = async () => {
        const response = await request.run(user.id);

        if (response.statusCode === 200) {
            const { followings } = response.data;

            const ids = followings.map((following) => following.user.id);

            dispatch(setFollowingIds(ids));

            return true;
        }

        return false;
    };

    return { followingIds, update, request };
};
