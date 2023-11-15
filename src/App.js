import './App.css';
import { Link } from '@aws-amplify/ui-react';
import SearchContainer from './components/search/SearchContainer.js'

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
      </Routes>
    </Router>
  );
}

export default App;
