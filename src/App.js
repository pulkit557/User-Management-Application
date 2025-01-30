import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserDetail from './components/UserDetail';

const App = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link>
    </nav>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/user/:id" element={<UserDetail />} />
    </Routes>
  </Router>
);

export default App;
