import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Dancing_Script } from '@next/font/google';

const dancing = Dancing_Script({

});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={dancing.className}>

      <Component {...pageProps} />;
    </main>
  )
}

export default MyApp;
