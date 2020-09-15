import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <p>홈</p>
      <p>
        <Link to="/lotto">로또</Link>
      </p>
    </Layout>
  );
};

export default Home;