"use client";

import { FC, ReactNode, memo } from "react";
import { Provider } from "react-redux";

import store from "@redux/store";

interface StoreLayoutProps {
    children: ReactNode;
}

const StoreLayout: FC<StoreLayoutProps> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default memo(StoreLayout);
