import React from 'react';

function SearchCard(props){
    const {title, format} = props.production
    return(
        <div>
            <h2>{title}</h2>
            <div>{format}</div>
        </div>
    )
}

export default SearchCard