import CustomHead from '../components/CustomHead';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Page from '../components/Page';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      {/* Custom wrapper around Next's <Head /> component */}
      <CustomHead />
      {/* Page content */}
      <NavBar />
      <Page>
        <Component {...pageProps} />
      </Page>
      <Footer />
    </div>
  );
}

export default MyApp;
