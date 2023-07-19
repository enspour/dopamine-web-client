import type { Metadata } from "next";

import { Login } from "@features/authorization";

export const metadata: Metadata = {
    title: "Dopamine | Login",
};

const Page = () => {
    return <Login />;
};

export default Page;
