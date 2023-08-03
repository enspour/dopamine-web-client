"use client";

import { FC, memo } from "react";

import { useAppSelector } from "@redux/hooks";

import { INTER_MESSAGES, InterMessageId } from "@features/inter";
import { selectInterMessages } from "@features/inter/client";

interface InterMessageProps {
    id: InterMessageId;
}

const InterMessage: FC<InterMessageProps> = ({ id }) => {
    const messages = useAppSelector(selectInterMessages);
    return <>{messages[id] || INTER_MESSAGES[id]}</>;
};

export default memo(InterMessage);
