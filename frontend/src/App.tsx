import { useState } from 'react'
import './App.css'
import { Input, Typography } from "@material-tailwind/react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/home';
import Login from './pages/login';
import Responsiva from './pages/responsiva';
import AddUser from './pages/addUser';


function App() {

  return (
    <>
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/responsiva" element={<Responsiva />} />
        <Route path="/addUser" element={<AddUser />} />
      </Routes>
  </Router>
    </>
  )
}

export default App
