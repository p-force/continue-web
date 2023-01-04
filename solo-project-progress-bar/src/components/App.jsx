import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Checklist from './Checklist';
import Home from './Home';
import Navbar from './navbar/Navbar';
import Templates from './Templates';
import MyTemplates from './MyTemplates';
import AddNewEmployee from './AddNewEmployee';
import NewEmployee from './NewEmployee';

import AllUsers from './AllUsers';

function App({
  lists, myLists, list, userEmail, userName, newEmployee, entryError, externalList, userId, admin, usersGG,
}) {
  const [checklists, setChecklists] = useState(lists);
  const [myChecklists, setMyChecklists] = useState(myLists);
  const [user, setUser] = useState(userName || null);
  const [newEmp, setNewEmp] = useState(newEmployee);
  const [isAdmin, setIsAdmin] = useState(admin || false);
  // const [authState, setAuthState] = useState(userSesion || null)
  return (
    <>
      <Navbar
        setChecklists={setChecklists}
        setMyChecklists={setMyChecklists}
        user={user}
        setUser={setUser}
        isAdmin={isAdmin}
        userId={userId}
      />
      <Routes>
        <Route path="/" element={<Home checklists={checklists} setUser={setUser} entryError={entryError} setIsAdmin={setIsAdmin} />} />
        <Route path="/templates/all" element={<Templates checklists={checklists} setChecklists={setChecklists} />} />
        <Route
          path="/templates/my"
          element={(
            <MyTemplates
              myChecklists={myChecklists}
              setMyChecklists={setMyChecklists}
              user={user}
            />
          )}
        />
        <Route path="employees/new" element={<AddNewEmployee setNewEmp={setNewEmp} newEmp={newEmp} />} />
        <Route path="employees/:id" element={<NewEmployee newEmp={newEmp} />} />
        <Route path="/allUsers" element={<AllUsers allUsersGG={usersGG} />} />

        <Route path="/:uniqueUrl" element={<Checklist list={list} />} />
      </Routes>
    </>
  );
}

export default App;
