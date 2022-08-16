import React from 'react'
import {BrowserRouter as Router, Link, 
  Routes, Route} from 'react-router-dom'
import BookStore from './components/BookStore';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Menu from './components/Menu';
import Price from './components/price';
import Rating from './components/rating';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <Router>

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/LogIn" element={<LogIn></LogIn>}/>
      <Route path="/Signup" element={<Signup></Signup>}/>
      <Route path="/BookStore" element={<BookStore></BookStore>}/>
      <Route path="/Dashboard" element={<Dashboard></Dashboard>}/>
      <Route path="/rating" element={<Rating></Rating>}/>
      <Route path="/price" element={<Price></Price>}/>
        </Routes>
      </Router>
            </div>
  );
}

export default App;
