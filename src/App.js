import './App.css';
import { Link } from '@aws-amplify/ui-react';
import SearchContainer from './components/search/SearchContainer.js'
import ProductionContainer from './components/production-page/ProductionContainer.js'

import {
  BrowserRouter as Router,
  Link as ReactRouterLink,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <ReactRouterLink to="/search" component={Link}>Search</ReactRouterLink>
      <Routes>
        <Route path="/search" element={<SearchContainer />} />
        <Route path="/:productionTitle" element={<ProductionContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
