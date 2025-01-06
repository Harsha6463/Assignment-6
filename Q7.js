
import React, { useState } from 'react';

const NamesData = [
  { id: 1, name: 'Harsha' }, { id: 2, name: 'Khajavalli' }, { id: 3, name: 'Dhanush' },
  { id: 4, name: 'Pramodh' }, { id: 5, name: 'Adithya' }, { id: 6, name: 'Uday' },
  { id: 7, name: 'Rahul' }, { id: 8, name: 'Gurukiran' }, { id: 9, name: 'Varun' },
  { id: 10, name: 'Shashank' }, { id: 11, name: 'Bharath' }, { id: 12, name: 'Charan' },
  { id: 13, name: 'Sai' }, { id: 14, name: 'Teja' }, { id: 15, name: 'Ravi' },
  { id: 16, name: 'Chandana' }, { id: 17, name: 'Saidivya' }, { id: 18, name: 'Saidurga' },
  { id: 19, name: 'Sameera' }, { id: 20, name: 'Chandu' },
];

const Q7 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); 
  const [searchbar, setSearchbar] = useState('');

  const filternames = NamesData.filter(item =>
    item.name.toLowerCase().includes(searchbar.toLowerCase())
  );

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = filternames.slice(firstIndex, lastIndex);

  const nextPage = () => {
    if (currentPage < (filternames.length / itemsPerPage)) {
      setCurrentPage(countpage => countpage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(countpage => countpage - 1);
    }
  };


  const inputsearch = (e) => {
    setSearchbar(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search items..."
        value={searchbar}
        onChange={inputsearch}
        style={{ marginBottom: '10px', padding: '5px', width: '300px' }}
      />
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {currentItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <div>
        <button onClick={previousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === (filternames.length / itemsPerPage)}
        >
          Next
        </button>
      </div>

      <div>
        <p>
          Page {currentPage} of {(filternames.length / itemsPerPage)}
        </p>
      </div>
    </div>
  );
};

export default Q7;