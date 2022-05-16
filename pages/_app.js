import Header from "../src/Header";
import Footer from "../src/Footer";
import UseResponsiveContext from "../src/UseResposiveContext";
import Head from "next/head"

function MyApp({ Component, pageProps }) {
	return (
		<div id="main">
			<Head>
				<title>I Am Glaze - Site</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="The Official Site of Glaze" />
				<meta name="keywords" content="Portfolio, art, web design" />
				<meta name="author" content="Glaze, Rasmus R." />
				<link rel="icon" type="image/png" sizes="128x128" href="/favicon.png" />
			</Head>
			<UseResponsiveContext>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</UseResponsiveContext>
		</div>
	);
}

export default MyApp;
