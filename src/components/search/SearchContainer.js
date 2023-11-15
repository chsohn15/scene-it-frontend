import React, { useState, useEffect } from 'react';
import SearchCard from './SearchCard.js'

function SearchContainer(){
    
    const [productions, setProductions] = useState([]);
    
    useEffect( () => {
        fetch("http://scene-it-api.herokuapp.com/productions")
        .then(res => res.json())
        .then(productions => setProductions(productions))
      });

    return(
        <div>
            <h1>Search Container</h1>
            {productions.map(production => <SearchCard production={production}/>)}
        </div>
    )
}

export default SearchContainer