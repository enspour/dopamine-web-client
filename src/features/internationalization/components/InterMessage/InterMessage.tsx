"use client";

import { FC } from "react";

import { useAppSelector } from "@redux/hooks";
import { selectInterMessages } from "@redux/slices/internationalization.slice";

import { INTER_MESSAGES, InterMessageId } from "@features/internationalization";

interface InterMessageProps {
    id: InterMessageId;
}

const InterMessage: FC<InterMessageProps> = ({ id }) => {
    const messages = useAppSelector(selectInterMessages);
    return <>{messages[id] || INTER_MESSAGES[id]}</>;
};

export default InterMessage;
