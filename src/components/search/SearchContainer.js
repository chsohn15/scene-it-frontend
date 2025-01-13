import React, { useState, useEffect } from "react";
import SearchCard from "./SearchCard.js";
import SearchInput from "./SearchInput.js";

function SearchContainer() {
  const [productions, setProductions] = useState([]);
  const [displayedProductions, setDisplayedProductions] = useState([]);

  useEffect(() => {
    fetch("https://scene-it-api-52ad0b1f04cb.herokuapp.com/productions")
      .then((res) => {
        if (!res.ok) {
          console.log('There was an error in fetching data');
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((productions) => {
        setProductions(productions);
        setDisplayedProductions(productions);
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
      });
  }, []);

  const handleSearch = (input) => {
    let filteredProductions = productions.filter(production => production.title.includes(input))
    setDisplayedProductions(filteredProductions)
  }

  return (
    <div class="main">
      <h1>Browse Films and Movies</h1>
      <SearchInput handleSearch={handleSearch}/>
      <div class="cards-container">
      {displayedProductions.map((production) => (
        <SearchCard production={production} />
      ))}
      </div>
    </div>
  );
}

export default SearchContainer;
