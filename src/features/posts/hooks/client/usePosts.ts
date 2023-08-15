import { useEffect, useRef, useState } from "react";

import { useRequest, useRequestLoading } from "@hooks/client";

import { Post, PostsApi } from "@features/posts";

import { events } from "@utils";

export const usePosts = (...userIds: number[]) => {
    const [posts, setPosts] = useState<Post[]>([]);

    const from = useRef<number>(0);

    const request = useRequest(PostsApi.getManyByUserIds);
    const loading = useRequestLoading(request, [posts]);

    const upload = async (from: number, to: number): Promise<boolean> => {
        const response = await request.run(userIds, from, to);

        if (response.statusCode === 200) {
            const { posts } = response.data;
            setPosts((prev) => [...prev, ...posts]);

            return true;
        }

        return false;
    };

    const uploadMore = async (): Promise<boolean> => {
        const value = from.current;

        const isUpload = await upload(value, value + 10);

        if (isUpload) {
            from.current += 10;
        }

        return isUpload;
    };

    useEffect(() => {
        const off = events.on("posts/user-create-one", (post) => {
            if (!userIds.includes(post.owner.id)) {
                return;
            }

            from.current += 1;
            setPosts((prev) => [post, ...prev]);
        });

        return () => {
            off();
        };
    }, []);

    useEffect(() => {
        const off = events.on("posts/user-remove-one", (post) => {
            if (!userIds.includes(post.owner.id)) {
                return;
            }

            const index = posts.findIndex((item) => item.id === post.id);

            if (index === -1) {
                return;
            }

            from.current -= 1;
            setPosts((prev) => [
                ...prev.slice(0, index),
                ...prev.slice(index + 1),
            ]);
        });

        return () => {
            off();
        };
    }, [posts]);

    return { posts, loading, uploadMore };
};
