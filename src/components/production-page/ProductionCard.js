import React from "react";

function ProductionCard(props) {
  const { scene_description, location, image_url } = props.film_location;
  const { city, country, name } = location;

  return (
    <div>
      <img src={image_url}/>
      <div>{scene_description}</div>
      <div>City: {city}</div>
      <div>Country: {country}</div>
      <div>Name: {name}</div>
    </div>
  );
}

export default ProductionCard;
