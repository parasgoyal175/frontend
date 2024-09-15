
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import './App.css';
import Translator from './pages/Translator';
import Chat from './pages/Chat';
import FAQ from './pages/FAQ';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/FAQ" element={<FAQ/>} />
      </Routes>
    </div>
  );
}

export default App;
