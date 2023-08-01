"use client";

import { FC, ReactNode, memo, useEffect } from "react";

import { Internationalization } from "@features/internationalization";
import { useInternationalization } from "@features/internationalization/client";

import { ModalsLayouts } from "@features/modals/client";

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

    return <ModalsLayouts>{children}</ModalsLayouts>;
};

export default memo(ClientLayout);
