import React from "react";
import { Link, Flex, Heading } from "@aws-amplify/ui-react";
// import ProductionContainer from '../production-page/ProductionContainer.js'

import {
  BrowserRouter as Router,
  Link as ReactRouterLink,
  Routes,
  Route,
} from "react-router-dom";

function SearchCard(props) {
  const { title, format, image_url } = props.production;
  const titlePath = title
    .replace(/\s+/g, "-")
    .toLowerCase()
    .replaceAll(",", "");

  return (
    <div class="card">
      <img src={image_url} style={{ width: 200 }} />
      <ReactRouterLink class="card-link"
        to={"/" + titlePath}
        state={{ production: props.production }}
        component={Link}
      >
        {title}
      </ReactRouterLink>
    </div>
  );
}

export default SearchCard;
