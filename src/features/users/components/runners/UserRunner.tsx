import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { type Runner } from "@components/layouts/LoaderLayout/LoaderLayout";

import { useCustomRouter } from "@hooks/client";

import { useUser } from "@features/users/client";

import { isPrivateNavigation } from "@interfaces";

const UserRunner: Runner = ({ done, setMessage }) => {
    const initialized = useRef(false);

    const pathname = usePathname();
    const router = useCustomRouter();

    const { update } = useUser();

    const run = async (): Promise<void> => {
        setMessage("User Loading...");

        const isUpdate = await update();

        if (!isUpdate && isPrivateNavigation(pathname)) {
            await router.push("/login");
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

export default UserRunner;
