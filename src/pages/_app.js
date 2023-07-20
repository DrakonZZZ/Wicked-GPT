import Head from "next/head";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "../styles/globals.css";

function App({ Component, pageProps }) {
    return (
        <>
            <UserProvider>
                <Head></Head>
                <Component {...pageProps} />
            </UserProvider>
        </>
    );
}

export default App;
