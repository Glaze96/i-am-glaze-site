import Header from "../src/Header";
import Footer from "../src/Footer";

function MyApp({ Component, pageProps }) {
	return (
		<div id="main">
			<Header />
			<Component {...pageProps} />
			<Footer />
		</div>
	);
}

export default MyApp;
