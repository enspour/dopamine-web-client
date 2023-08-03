import type { Metadata } from "next";

import { Login } from "@features/pages/login";

export const metadata: Metadata = {
    title: "Dopamine | Login",
};

const Page = () => {
    return <Login />;
};

export default Page;
