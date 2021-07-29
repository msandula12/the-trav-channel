import Head from 'next/head';
import { useRouter } from 'next/router';

const CustomHead = () => {
  const router = useRouter();

  const getPageName = () => {
    const currentPage = router.pathname.slice(1);
    if (!currentPage) {
      return '';
    }
    return `${currentPage[0].toUpperCase()}${currentPage.slice(1)}`;
  };

  const pageName = getPageName();

  return (
    <Head>
      <title>{pageName ? `${pageName} - ` : ''}The Trav Channel</title>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✈️</text></svg>"
      />
    </Head>
  );
};

export default CustomHead;
