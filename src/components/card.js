import React, { useState } from 'react';
import image from './rick and morty image.png'

function Card({ cards }) {
    return (
      <div className='grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-2 max-lg:gap-4 max-sm:w-full'>
        {cards.map((card, index) => (
          <div
            key={index}
            className="max-w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto"
          >
            <a href={card.image}>
              <img className="rounded-t-lg" src={card.image} alt={`Image of ${card.name}`} />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Name: {card.name}
                </h5>
              </a>
              <div className='flex flex-row gap-3 items-center mb-2'>
                <div
                  className={`w-4 h-4 rounded-full ${
                    card.status === 'alive'
                      ? 'bg-green-600'
                      : card.status === 'dead'
                      ? 'bg-red-600'
                      : 'bg-orange-600'
                  }`}
                ></div>
                <p
                  className={`font-normal ${
                    card.status === 'alive'
                      ? 'text-green-600'
                      : card.status === 'dead'
                      ? 'text-red-600'
                      : 'text-orange-600'
                  } dark:text-gray-400`}
                >
                  {card.status}
                </p>
              </div>
  
              <div className='flex flex-col gap-2'>
                <div className='flex flex-row gap-3 items-center justify-center bg-green-600'>
                  <p className="font-normal text-white dark:text-white">Species: {card.species}</p>
                </div>
                <div className='flex flex-row gap-3 items-center justify-center bg-green-600'>
                  <p className="font-normal text-white dark:text-white">Gender: {card.gender}</p>
                </div>
              </div>
            </div>        
          </div>
        ))}
         <div className="rounded-lg w-[150px] bg-white fixed bottom-[0] right-[0] mb-5  mr-5 hover:w-[156px] hover:bg-blue-300 max-md:hidden">
          <a href={image}>
              <img className="rounded-lg" src={image} alt={`Image of ${image}`} />
            </a>
            </div>
      </div>
    );
  }
  export default Card;