import { useAppDispatch, useAppSelector } from "@redux/hooks";

import { useRequest, useRequestLoading } from "@hooks/client";

import { UsersApi } from "@features/users";
import { selectUser, setUser } from "@features/users/client";

export const useUser = () => {
    const user = useAppSelector(selectUser);

    const dispatch = useAppDispatch();

    const request = useRequest(UsersApi.me);
    const loading = useRequestLoading(request, [user]);

    const update = async (): Promise<boolean> => {
        const response = await request.run();

        if (response.statusCode === 200) {
            const { user } = response.data;
            dispatch(setUser(user));

            return true;
        }

        return false;
    };

    return { user, loading, update };
};
