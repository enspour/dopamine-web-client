import { Metadata } from "next";

import { Feed } from "@features/pages/feed";

export const metadata: Metadata = {
    title: "Dopamine | Feed",
};

const Page = () => {
    return <Feed />;
};

export default Page;
