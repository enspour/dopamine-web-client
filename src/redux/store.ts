import { configureStore } from "@reduxjs/toolkit";

import modalsSlice from "./slices/modals.slice";
import userSlice from "./slices/user.slice";

const store = configureStore({
    reducer: {
        userSlice,
        modalsSlice,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
