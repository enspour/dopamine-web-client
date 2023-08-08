import { useRequest, useRequestLoading } from "@hooks/client";
import { useUser } from "./useUser";

import { useAppDispatch, useAppSelector } from "@redux/hooks";

import { FollowingsApi } from "@features/users";
import { selectFollowingIds, setFollowingIds } from "@features/users/client";

import { binarySearch } from "@utils";

export const useFollowingIds = () => {
    const { user } = useUser();

    const followingIds = useAppSelector(selectFollowingIds);

    const dispatch = useAppDispatch();

    const request = useRequest(FollowingsApi.getAll);
    const loading = useRequestLoading(request, [followingIds]);

    const update = async (): Promise<boolean> => {
        const response = await request.run(user.id);

        if (response.statusCode === 200) {
            const { followings } = response.data;

            const ids = followings.map((following) => following.user.id);

            dispatch(setFollowingIds(ids));

            return true;
        }

        return false;
    };

    const contains = (id: number): boolean => {
        const index = binarySearch(id, followingIds);

        if (index >= 0) {
            return true;
        }

        return false;
    };

    return { followingIds, loading, update, contains };
};
