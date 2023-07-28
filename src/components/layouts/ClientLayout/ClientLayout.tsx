"use client";

import { FC, ReactNode, memo, useEffect } from "react";

import MenuModal from "@components/modals/MenuModal/MenuModal";
import SearchModal from "@components/modals/SearchModal/SearchModal";
import SettingsModal from "@components/modals/SettingsModal/SettingsModal";

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

    return (
        <>
            {children}

            <MenuModal />
            <SearchModal />
            <SettingsModal />
        </>
    );
};

export default memo(ClientLayout);
