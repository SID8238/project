import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import AuthPage from './Pages/AuthPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>

      <Route path="/login/student" element={<AuthPage mode="login" role="student"/>} />
      <Route path="/login/employee" element={<AuthPage mode="login" role="employee"/>} />
      <Route path="/login/parent" element={<AuthPage mode="login" role="parent"/>} />
      <Route path="/login/alumni" element={<AuthPage mode="login" role="alumni"/>} />
    </Routes>
  )
}

export default App
