import React, { useState } from 'react';

function Navbar() {
  const [isPopUpVisible, setPopUpVisible] = useState(false);

  const togglePopUp = () => {
    setPopUpVisible(!isPopUpVisible);
  };

  return (
    <>
      <nav className="bg-gray-800 dark:bg-gray-800 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <h1 className='dark:text-white text-[40px] max-md:text-[30px] max-sm:text-[18px]'>rick-and-morty-characters</h1>
          <div className="flex md:order-2">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 max-sm:hidden"
              onClick={togglePopUp}
            >
              Get started
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          </div>
        </div>
      </nav>


      {isPopUpVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-8">
          <div className="absolute inset-0 z-50 backdrop-blur-sm"></div>
          <div className="relative z-50 bg-white p-4 shadow-md rounded-lg">
            <button
              type="button"
              className="absolute top-0 right-0 m-2 bg-black text-orange-600 hover:text-red-800 focus:outline-none"
              onClick={togglePopUp}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className='mt-6'>
            <h1 className="text-center uppercase font-bold text-[30px] underline">Welcome to the page</h1>
            <ul className='text-red-600 mt-4 font-semibold'>
            <li>1. Rick and Morty Characters.</li>
            <li>2. You can search your favourite characters through search.</li>
            <li>3. You can also filter the data by following buttons Dead, Alive and Unknown.</li>
            <li className='text-center text-white bg-black mt-4 py-2'>Hope you will enjoy!</li>
            </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
