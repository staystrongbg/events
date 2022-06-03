import Link from 'next/link';
import Layout, { Container } from '@/components/Layout';
import { FaExclamationTriangle } from 'react-icons/fa';

const Error = () => {
  return (
    <Layout>
      <Container style={{ textAlign: 'center' }}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h2>that page doesnt exist</h2>
        <button>
          <Link href='/'>
            <a>go home</a>
          </Link>
        </button>
      </Container>
    </Layout>
  );
};

export default Error;
