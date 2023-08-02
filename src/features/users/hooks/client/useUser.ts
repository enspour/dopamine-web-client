import { useAppDispatch, useAppSelector } from "@redux/hooks";

import { UsersApi } from "@features/users";
import { selectUser, setUser } from "@features/users/client";

import { SessionsApi } from "@api";

export const useUser = () => {
    const user = useAppSelector(selectUser);

    const dispatch = useAppDispatch();

    const updateUser = async () => {
        const response = await UsersApi.me();

        if (response.statusCode === 200) {
            const { user } = response.data;
            dispatch(setUser(user));
        }

        return response.statusCode;
    };

    const update = async () => {
        const statusCode = await updateUser();

        if (statusCode === 401) {
            const { statusCode } = await SessionsApi.refresh();

            if (statusCode === 200) {
                return await updateUser();
            }

            return statusCode;
        }

        return statusCode;
    };

    return { user, update };
};
