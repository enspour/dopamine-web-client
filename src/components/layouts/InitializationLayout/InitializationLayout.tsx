"use client";

import { FC, ReactNode, memo, useEffect } from "react";

import services from "@services";

interface InitializationProps {
    children: ReactNode;
}

const InitializationLayout: FC<InitializationProps> = ({ children }) => {
    useEffect(() => {
        services.initialize();

        return () => {
            services.destroy();
        };
    }, []);

    return <>{children}</>;
};

export default memo(InitializationLayout);
