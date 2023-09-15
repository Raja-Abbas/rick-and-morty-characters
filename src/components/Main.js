import React from 'react';
import PaginationPage from './pagination';
import cardData from './data';
import Navbar from './navbar'

function Main() {
  return (
    <div className='flex flex-col gap-8 bg-gray-900 p-4 overflow-y-hidden'>
    <Navbar/>
      <PaginationPage cardData={cardData} />
    </div>
  );
}

export default Main;
