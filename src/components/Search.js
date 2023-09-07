import React from "react";

function Search({onUpdateQuery, query}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Fish:</label>
      <input
        type="text"
        value ={query}
        id="search"
        placeholder="Type a name to search..."
        onChange={onUpdateQuery}
      />
    </div>
  );
}

export default Search;