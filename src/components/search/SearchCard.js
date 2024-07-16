import React from 'react';
import { Link, Flex, Heading } from '@aws-amplify/ui-react';

import {
  BrowserRouter as Router,
  Link as ReactRouterLink,
  Routes,
  Route,
} from 'react-router-dom';

function SearchCard(props){
    const {title, format, image_url} = props.production
    console.log(props.production.film_locations[0].scene_description)
    return(
        <div>
            <img src={image_url} style={{width:200}}/>
            <ReactRouterLink to={'/' + title} component={Link}>{title}</ReactRouterLink>
            {/* <Routes>
                <Route path={'/' + title} element={<SearchContainer />} />
            </Routes> */}
        </div>
    )
}

export default SearchCard