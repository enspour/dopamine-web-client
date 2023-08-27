import { FC, memo } from "react";

import Box from "@components/ui/catalog/Box/Box";
import VerticalList from "@components/ui/catalog/VerticalList/VerticalList";
import VerticalListElement from "@components/ui/catalog/VerticalList/VerticalListElement";

import { useRequest } from "@hooks/client";

import { PostsApi, type Post } from "@features/posts";

import { events } from "@utils";

export interface PostHeaderMoreMenuProps {
    post: Post;
}

const PostHeaderMoreMenu: FC<PostHeaderMoreMenuProps> = ({ post }) => {
    const request = useRequest(PostsApi.remove);

    const remove = async () => {
        const response = await request.run(post.id);

        if (response.statusCode === 200) {
            events.dispatch("posts/user-remove-one", post);
        }
    };

    const complain = () => {};

    return (
        <Box style={getStyle()}>
            <VerticalList>
                <VerticalListElement onClick={remove}>
                    Remove
                </VerticalListElement>

                <VerticalListElement onClick={complain}>
                    Complain
                </VerticalListElement>
            </VerticalList>
        </Box>
    );
};

const getStyle = () =>
    ({
        padding: "1.5rem 0",
        minWidth: "20rem",
    } as const);

export default memo(PostHeaderMoreMenu);
