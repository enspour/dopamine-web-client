"use client";

import { FC, ReactNode, memo, useEffect } from "react";
import { Provider } from "react-redux";

import store from "@redux/store";

import services from "@services";

interface ClientLayoutProps {
    children: ReactNode;
}

const ClientLayout: FC<ClientLayoutProps> = ({ children }) => {
    useEffect(() => {
        services.initialize();

        return () => {
            services.destroy();
        };
    }, []);

    return <Provider store={store}>{children}</Provider>;
};

export default memo(ClientLayout);
