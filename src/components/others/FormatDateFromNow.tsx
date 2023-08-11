"use client";

import { FC, memo } from "react";

import { useLocate } from "@features/inter/client";

const formats: [number, string, ((seconds: number) => number) | null][] = [
    // [seconds, inter message id, calculate value]
    [60, "seconds ago", (seconds) => seconds], // less 60 seconds show "M seconds ago"
    [120, "1 minute ago", null], // less 120 seconds show "1 minute ago"
    [3600, "minutes ago", (seconds) => Math.trunc(seconds / 60)], // less 3600 seconds show "N minutes ago"
    [7200, "1 hour ago", null],
    [86400, "hours ago", (seconds) => Math.trunc(seconds / 3600)],
    [172800, "Yesterday", null],
    [604800, "days ago", (seconds) => Math.trunc(seconds / 86400)],
    [1209600, "Last week", null],
    [2419200, "weeks ago", (seconds) => Math.trunc(seconds / 604800)],
    [4838400, "Last month", null],
    [29030400, "months ago", (seconds) => Math.trunc(seconds / 2419200)],
    [58060800, "Last year", null],
    [2903040000, "years ago", (seconds) => Math.trunc(seconds / 29030400)],
];

interface FormatDateFromNowProps {
    date: Date;
}

const FormatDateFromNow: FC<FormatDateFromNowProps> = ({ date }) => {
    const [locate] = useLocate();

    if (typeof date === "string") {
        date = new Date(date);
    }

    const seconds = Math.trunc((new Date().getTime() - date.getTime()) / 1000);

    if (seconds === 0) {
        return <>Just now</>;
    }

    const index = formats.findIndex((formats) => seconds < formats[0]);

    const [_, formatId, calculate] = formats[index];

    if (calculate) {
        return <>{`${calculate(seconds)} ${formatId}`}</>;
    }

    return <>{formatId}</>;
};

export default memo(FormatDateFromNow);
