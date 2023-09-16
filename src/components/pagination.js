/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import SearchBar from './button'; 
import Card from './card'
import cardData from './data'

<div>
<cardData/>
<Card/>
</div>
  function PaginationPage() {
    const [filter, setFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const cardsPerPage = 17;
    const [currentPage, setCurrentPage] = useState(1);
  
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
  
    const filteredData = cardData.filter((card) => {
      const nameMatches = card.name.toLowerCase().includes(searchQuery.toLowerCase());
      const statusMatches = filter === 'All' || card.status === filter;
    
      return nameMatches && statusMatches;
    });
    
    const hasSingleMatch = filteredData.length === 1;
    
    const displayedCards = hasSingleMatch ? filteredData : filteredData.slice(startIndex, endIndex);
  
    const totalPages = Math.ceil(filteredData.length / cardsPerPage);
  
    const goToPage = (page) => {
      setCurrentPage(page);
    };
  
    const handleFilterChange = (newFilter) => {
      setFilter(newFilter);
      setCurrentPage(1);
    };
  
    const handleSearch = (query) => {
      setSearchQuery(query);
      setCurrentPage(1);
    };
  
    return (
      <div>
        <div className="mt-[100px] flex justify-center space-x-3 mb-4 max-sm:grid max-sm:grid-col-2 max-sm:gap-2">
        <button
  className={`${
    filter === 'All' ? 'bg-blue-500' : 'bg-blue-800 hover:bg-blue-600'
  } text-white px-4 py-2 rounded-full`}
  onClick={() => {
    handleFilterChange('All');
    if (filter !== 'All') {
      // Reload the page only if the filter is changing to 'All'.
      window.location.reload();
    }
  }}
>
Back
</button>
          <button
            className={`${
              filter === 'All' ? 'bg-gray-500' : 'bg-gray-800 hover:bg-gray-600'
            } text-white px-4 py-2 rounded-full`}
            onClick={() => handleFilterChange('All')}
          >
            All
          </button>
          <button
            className={`${
              filter === 'Dead' ? 'bg-red-500' : 'bg-red-800 hover:bg-red-600'
            } text-white px-4 py-2 rounded-full`}
            onClick={() => handleFilterChange('dead')}
          >
            Dead
          </button>
          <button
            className={`${
              filter === 'alive' ? 'bg-green-500' : 'bg-green-800 hover:bg-green-600'
            } text-white px-4 py-2 rounded-full`}
            onClick={() => handleFilterChange('alive')}
          >
            Alive
          </button>
          <button
            className={`${
              filter === 'unknown' ? 'bg-orange-500' : 'bg-orange-800 hover:bg-orange-600'
            } text-white px-4 py-2 rounded-full`}
            onClick={() => handleFilterChange('unknown')}
          >
            Unknown
          </button>
        </div>
  
       
        <SearchBar onSearch={handleSearch} />
  
        <Card cards={displayedCards} />
  
        <nav aria-label="Page navigation example">
          <ul className="flex items-center -space-x-px h-10 text-base justify-center mb-5">
            {Array.from({ length: totalPages }).map((_, page) => (
              <li key={page}>
                <a
                  href="#"
                  className={`flex items-center justify-center mt-10 mb-5 px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 ${
                    currentPage === page + 1
                      ? 'bg-gray-500 text-gray-800'
                      : 'hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white hover:h-11'
                  }`}
                  onClick={() => goToPage(page + 1)}
                >
                  {page + 1}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
  
  export default PaginationPage;