"use client";

import { FC, ReactNode } from "react";

import StoreLayout from "../StoreLayout/StoreLayout";

import { Inter } from "@features/inter";
import { InterInitializer } from "@features/inter/client";

import { Modals } from "@features/modals/client";

interface ClientLayoutProps {
    children: ReactNode;
    inter: Inter;
}

const ClientLayout: FC<ClientLayoutProps> = ({ children, inter }) => {
    return (
        <StoreLayout>
            {children}

            <InterInitializer inter={inter} />

            <Modals />
        </StoreLayout>
    );
};

export default ClientLayout;
