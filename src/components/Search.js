import React, { useState } from "react";

function Search({ changeFilter }) {

  const [ textSearch, setTextSearch ] = useState("")

  function onChange(e) {
    setTextSearch(e.target.value);
    changeFilter(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        value={textSearch}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={onChange}
      />
    </div>
  );
}

export default Search;
