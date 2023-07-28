"use client";

import { FC, ReactNode, memo } from "react";

import { useMediaQuery } from "@hooks/client";

interface MediaQueryProps {
    children: [ReactNode, ReactNode];
    media: string;
}

const MediaQuery: FC<MediaQueryProps> = ({ children, media }) => {
    const matches = useMediaQuery(media);

    return (
        <>
            {matches && children[0]}
            {!matches && children[1]}
        </>
    );
};

export default memo(MediaQuery);
