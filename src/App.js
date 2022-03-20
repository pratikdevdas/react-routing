import React from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Notes = () => {
  return <>Notes Page</>;
};

const Users = () => {
  return <>Users Page</>;
};

const Home = () => {
  return <>Home Page</>;
};


export default function App() {
  const padding = {
    padding: 5,
  };

  return (
    <div>
      <Router>
        <div>
          <Link to="/">home</Link>
          <Link to="/notes" style={padding}>
            notes
          </Link>
          <Link to="/users">users</Link>
        </div>

        <Routes>
          <Route path="/notes" element={<Notes />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
      
    </div>
  );
}
