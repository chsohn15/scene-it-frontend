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
      <ReactRouterLink to="/browse" component={Link}>Browse</ReactRouterLink>
      <Routes>
        <Route path="/browse" element={<SearchContainer />} />
        <Route path="/:productionTitle" element={<ProductionContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
