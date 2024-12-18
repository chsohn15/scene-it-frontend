import React, { useState, useEffect } from "react";
import SearchCard from "./SearchCard.js";

function SearchContainer() {
  const [productions, setProductions] = useState([]);

  useEffect(() => {
    fetch("https://scene-it-api-52ad0b1f04cb.herokuapp.com/productions")
      .then((res) => res.json())
      .then((productions) => setProductions(productions));
  }, []);

  return (
    <div>
      <h1>Browse Films and Movies</h1>
      {productions.map((production) => (
        <SearchCard production={production} />
      ))}
    </div>
  );
}

export default SearchContainer;
