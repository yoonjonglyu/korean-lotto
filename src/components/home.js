import React from 'react';
import Layout from './Layout';
import ViewNumber from './view-number';

const lottoNumber = [
  {id: 0, number : 1},
  {id: 1, number : 2},
  {id: 1, number : 3},
  {id: 1, number : 4},
  {id: 1, number : 5},
  {id: 1, number : 6}
];

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
           <ViewNumber number={lottoNumber}/>
         </div>
      </div>
    </Layout>
  );
};

export default Home;