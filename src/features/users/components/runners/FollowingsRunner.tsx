import { memo, useEffect, useRef } from "react";

import { type Runner } from "@components/layouts/LoaderLayout/LoaderLayout";

import { useFollowingIds, useUser } from "@features/users/client";

const FollowingsRunner: Runner = ({ done, setMessage }) => {
    const initialized = useRef(false);

    const { user } = useUser();

    const { update } = useFollowingIds();

    const run = async (): Promise<void> => {
        if (user.id) {
            setMessage("Followings Loading...");

            await update();
        }

        done();
    };

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true;

            run();
        }
    }, []);

    return null;
};

export default memo(FollowingsRunner);
