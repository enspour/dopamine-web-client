import type { Metadata } from "next";

import { Signup } from "@features/authorization";

export const metadata: Metadata = {
    title: "Dopamine | Signup",
};

const Page = () => {
    return <Signup />;
};

export default Page;
