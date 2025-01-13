import React from "react";

function SearchInput(props) {

  return (
    <div class="search-input">
        <label for="search">Search: </label>
        <input type="text" name="search" id="search" onChange={(e) => props.handleSearch(e.target.value)}/>
    </div>
  );
}

export default SearchInput;