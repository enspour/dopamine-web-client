import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

import { User } from "@interfaces";

export interface UserState {
    user: Pick<User, "id" | "nickname" | "name" | "avatar">;
}

const initialState: UserState = {
    user: {
        id: 0,
        nickname: "",
        name: "",
        avatar: "",
    },
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state: RootState): UserState["user"] =>
    state.userSlice.user;

export default userSlice.reducer;
