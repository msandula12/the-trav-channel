import NavBar from '../components/NavBar';
import Page from '../components/Page';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}

export default MyApp;
