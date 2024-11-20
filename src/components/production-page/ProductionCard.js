import React from 'react';

function ProductionCard(props){
	const {scene_description, location} = props.film_location
	const {city, country, name } = location
    return(
        <div>
          <div>{scene_description}</div>
          <div>City: {city}</div>
					<div>Country: {country}</div>
					<div>Name: {name}</div>
        </div>
    )
}

export default ProductionCard