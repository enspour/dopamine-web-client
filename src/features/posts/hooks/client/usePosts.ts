import { useRequest, useRequestLoading } from "@hooks/client";

import { useAppDispatch, useAppSelector } from "@redux/hooks";

import { Post, PostsApi } from "@features/posts";
import {
    appendPosts,
    clearPosts,
    insertPosts,
    selectPosts,
    selectPostsLastPage,
} from "@features/posts/client";

import { useFollowingIds, useUser } from "@features/users/client";

export const usePosts = () => {
    const { user } = useUser();
    const { followingIds } = useFollowingIds();

    const posts = useAppSelector(selectPosts);
    const lastPage = useAppSelector(selectPostsLastPage);

    const dispatch = useAppDispatch();

    const request = useRequest(PostsApi.getManyByUserIds);
    const loading = useRequestLoading(request, [posts]);

    const upload = async (page: number): Promise<boolean> => {
        const userIds = [user.id, ...followingIds];

        const response = await request.run(userIds, page);

        if (response.statusCode === 200) {
            const { posts } = response.data;
            dispatch(appendPosts(posts));

            return true;
        }

        return false;
    };

    const uploadNext = async (): Promise<boolean> => {
        const page = lastPage + 1;
        return await upload(page);
    };

    const insert = (...posts: Post[]) => {
        dispatch(insertPosts(posts));
    };

    const clear = (): void => {
        dispatch(clearPosts());
    };

    return { posts, loading, insert, uploadNext, clear };
};
