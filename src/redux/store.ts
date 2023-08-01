import { configureStore } from "@reduxjs/toolkit";

import followingsSlice from "./slices/followings.slice";
import userSlice from "./slices/user.slice";

import { interReducer as inter } from "@features/inter/client";
import { modalsReducer as modals } from "@features/modals/client";

const store = configureStore({
    reducer: {
        followingsSlice,
        userSlice,
        inter,
        modals,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
