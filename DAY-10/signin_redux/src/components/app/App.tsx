import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from '../signin/signin.component';
import Signup from '../signup/signup.component';
import Dashboard from '../dashboard/dashboard';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/dashboad" element={<Dashboard />}></Route>
    </Routes>
    </BrowserRouter> 
    </>
  );
}

export default App;
