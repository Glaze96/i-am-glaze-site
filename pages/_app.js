import Header from "../src/Header";
import Footer from "../src/Footer";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
