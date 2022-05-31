import React from 'react';
const search = require('../assets/search.png');

function Search(props) {
  return (
    <div className="search">
      <img src={search} alt="search" />
    </div>
  );
}

export default Search;
