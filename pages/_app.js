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
    </div>
  );
}

export default MyApp;
