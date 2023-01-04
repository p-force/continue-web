import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import All from './All';
import Home from './Home';
import Login from './Login';
import Navbar from './navbar/Navbar';
// import Phones from './Phones';
import Signup from './Signup';

export default function App({
  userName, cards, userId,
}) {
  const [user, setUser] = useState(userName || null);
  const [id, setId] = useState(userId || 0);
  return (
    <>
      <Navbar user={user} setUser={setUser} userName={userName} />
      <Routes>
        <Route path="/" element={<Home cards={cards} userId={id} user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} setId={setId} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/all" element={<All />} />

      </Routes>
    </>
  );
}
