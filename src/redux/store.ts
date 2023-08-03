import { configureStore } from "@reduxjs/toolkit";

import { interReducer as inter } from "@features/inter/client";
import { modalsReducer as modals } from "@features/modals/client";
import { followingsReducer as followings, userReducer as user } from "@features/users/client";

const store = configureStore({
    reducer: {
        followings,
        user,
        inter,
        modals,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
