import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

import { LoadingState, User } from "@interfaces";

export interface UserState {
    loading: LoadingState;
    user: Pick<User, "id" | "nickname" | "name" | "avatar">;
}

const initialState: UserState = {
    loading: "loading",
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
            state.loading = "done";
        },
    },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.userSlice.user;
export const selectLoading = (state: RootState) => state.userSlice.loading;

export default userSlice.reducer;
