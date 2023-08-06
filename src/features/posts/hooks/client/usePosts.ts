import { useState } from "react";

import { useRequest } from "@hooks/client";

import { Post, PostsApi } from "@features/posts";

import { useFollowingIds, useUser } from "@features/users/client";

export const usePosts = () => {
    const { user } = useUser();

    const { followingIds } = useFollowingIds();

    const [posts, setPosts] = useState<Post[]>([]);

    const request = useRequest(PostsApi.getManyByUserIds);

    const update = async () => {
        const response = await request.run([user.id, ...followingIds]);

        if (response.statusCode === 200) {
            const { posts } = response.data;
            setPosts(posts);
        }
    };

    return { posts, update, request };
};
