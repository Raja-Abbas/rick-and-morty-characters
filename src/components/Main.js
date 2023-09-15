import React from 'react';
import PaginationPage from './pagination';
import cardData from './data';
import Navbar from './navbar'

function Main() {
  return (
    <div>
    <Navbar/>
      <PaginationPage cardData={cardData} />
    </div>
  );
}

export default Main;
