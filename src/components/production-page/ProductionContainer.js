import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import ProductionCard from './ProductionCard.js'

function ProductionContainer(props){
    // Get props from Link
    const location = useLocation()
    const {title, format, image_url, film_locations} = location.state.production

    console.log(film_locations)
    return(
        <div>
            <h1>Scenes from {title}</h1>
            {film_locations.map(film_location => <ProductionCard film_location={film_location}/>)}
        </div>
    )
}

export default ProductionContainer