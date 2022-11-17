import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Satisfy } from '@next/font/google';
import { Parisienne } from '@next/font/google';


const parisienne = Parisienne({
	weight: "400",
	variable: '--font-parisienne',
	subsets: ['latin']
});
const satisfy = Satisfy({
	weight: "400",
	variable: '--font-satisfy',
	subsets: ['latin']
});

function MyApp({ Component, pageProps }: AppProps) {
	return <main className={`${parisienne.variable} ${satisfy.variable} font-sans`}>
		<Component {...pageProps} />
	</main>

};

export default MyApp;
