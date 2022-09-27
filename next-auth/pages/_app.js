import Navbar from "../components/navbar";
import "../styles/globals.css";
import "../components/Navbar.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
