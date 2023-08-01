import { useAppDispatch, useAppSelector } from "@redux/hooks";

import { UsersApi } from "@features/users";
import { selectUser, setUser } from "@features/users/client";

export const useUser = () => {
    const user = useAppSelector(selectUser);

    const dispatch = useAppDispatch();

    const update = async () => {
        const response = await UsersApi.me();

        if (response.statusCode === 200) {
            dispatch(setUser(response.data.user));
        }

        return response.statusCode;
    };

    return { user, update };
};
