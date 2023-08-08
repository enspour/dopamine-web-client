import { FC, memo } from "react";

import SkeletonCircle from "@components/ui/catalog/Skeleton/SkeletonCircle";

const CreatePostModalUser: FC = () => {
    return (
        <div>
            <SkeletonCircle style={{ diameter: "5rem" }} />
        </div>
    );
};

export default memo(CreatePostModalUser);
