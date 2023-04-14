import { useEffect } from "react";
import type { AppProps } from "next/app";

import "@styles/reset.css";
import "@styles/globals.scss";

import "@api/mock";

import services from "@services";

import { Nunito } from "next/font/google";

const nunito = Nunito({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        services.initialize();
        return () => services.destroy();
    }, []);

    return (
        <main className={nunito.className}>
            <Component {...pageProps} />
        </main>
    );
}
