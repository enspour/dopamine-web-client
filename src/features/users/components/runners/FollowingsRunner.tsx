import { useEffect, useRef } from "react";

import { Runner } from "@components/layouts/LoaderLayout/LoaderLayout";

import { useFollowings, useUser } from "@features/users/client";

const FollowingsRunner: Runner = ({ done, setMessage }) => {
    const initialized = useRef(false);

    const { user } = useUser();

    const { update } = useFollowings();

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
    }, [user]);

    return null;
};

export default FollowingsRunner;
