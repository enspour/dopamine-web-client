"use client";

import { FC, memo } from "react";

import { Inter } from "@features/inter";
import { useInterInitializer } from "@features/inter/client";

interface InterProps {
    inter: Inter;
}

const InterInitializer: FC<InterProps> = ({ inter }) => {
    useInterInitializer(inter);

    return null;
};

export default memo(InterInitializer);
