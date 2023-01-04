import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Navbar from './navbar/Navbar';
import Phones from './Phones';
import Signup from './Signup';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/phones" element={<Phones />} />

      </Routes>
    </>
  );
}
