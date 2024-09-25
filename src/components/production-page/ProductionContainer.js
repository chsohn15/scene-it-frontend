import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';

function ProductionContainer(props){
    const location = useLocation()
    const {title, format, image_url} = location.state.production

    console.log(location.state.production.title)
    return(
        <div>
            <h1>Scenes from {title}</h1>
        </div>
    )
}

export default ProductionContainer