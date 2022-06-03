import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import Showcase from './Showcase';
import { useRouter } from 'next/router';
// -------------------------
// custom styled components
// -------------------------
// ---------------
//green colors
//#023430
//#00ED64
//#00684A
//#001E2B
// ---------------
export const Container = ({ children, style }) => {
  return (
    <div
      style={{ ...style, maxWidth: '960px', margin: 'auto', padding: '40px' }}
    >
      {children}
    </div>
  );
};
// -------------------------
// custom styled components
// -------------------------
const Layout = ({ children, keywords, description, title }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      {router.pathname === '/' && <Showcase />}
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;

Layout.defaultProps = {
  title: 'DJ Events | find the hottest parties',
  description: 'find the latest DJ and other...',
  keywords: 'music,djs,edm,events',
};
