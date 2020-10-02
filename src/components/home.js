import React from 'react';
import Layout from './Layout';
import ViewNumber from './view-number';

const Home = () => {
  return (
    <Layout>
      <div className="home-contents">
         <h1>로또</h1>
         <div>
           한강 수온 표
         </div>
         <div>
           지난 회차 당첨번호
           <ViewNumber />
         </div>
      </div>
    </Layout>
  );
};

export default Home;