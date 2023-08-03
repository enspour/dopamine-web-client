"use client";

import { FC, ReactNode } from "react";
import { Provider } from "react-redux";

import store from "@redux/store";

import { Inter } from "@features/inter";
import { InterInitializer } from "@features/inter/client";

import { Modals } from "@features/modals/client";

interface ClientLayoutProps {
    children: ReactNode;
    inter: Inter;
}

const ClientLayout: FC<ClientLayoutProps> = ({ children, inter }) => {
    return (
        <Provider store={store}>
            {children}

            <InterInitializer inter={inter} />

            <Modals />
        </Provider>
    );
};

export default ClientLayout;
