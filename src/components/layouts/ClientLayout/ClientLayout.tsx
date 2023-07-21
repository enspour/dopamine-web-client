"use client";

import { FC, ReactNode, memo, useEffect } from "react";

import { Internationalization } from "@features/internationalization";
import { useInternationalization } from "@features/internationalization/client";

import services from "@services";

interface ClientLayoutProps {
    children: ReactNode;
    internationalization: Internationalization;
}

const ClientLayout: FC<ClientLayoutProps> = ({
    children,
    internationalization,
}) => {
    useInternationalization(internationalization);

    useEffect(() => {
        services.initialize();

        return () => {
            services.destroy();
        };
    }, []);

    return <>{children}</>;
};

export default memo(ClientLayout);
