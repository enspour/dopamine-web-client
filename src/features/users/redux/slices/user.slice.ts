import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "@redux/store";

import { User } from "@features/users";

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
    state.user.user;

export const userReducer = userSlice.reducer;
