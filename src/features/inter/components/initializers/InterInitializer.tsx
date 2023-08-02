"use client";

import { FC } from "react";

import { Inter } from "@features/inter";
import { useInterInitializer } from "@features/inter/client";

interface InterProps {
    inter: Inter;
}

const InterInitializer: FC<InterProps> = ({ inter }) => {
    useInterInitializer(inter);

    return null;
};

export default InterInitializer;
