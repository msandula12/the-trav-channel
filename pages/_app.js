import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Page from '../components/Page';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <NavBar />
      <Page>
        <Component {...pageProps} />
      </Page>
      <Footer />
    </div>
  );
}

export default MyApp;
