import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './components/Main';
import Header from './components/Header';
import "./App.css";

function App() {
  return (
    <Router>
      <Header/>
      <Navbar />
      <Routes>
        <Route exact path="/" component={<Home/>} />
        <Route path="/login" component={<Login/>} />
        <Route path="/signup" component={<Signup/>} />
      </Routes>
      <Main/>
      <Footer />
    </Router>
  );
}

export default App;
