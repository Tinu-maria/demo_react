import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Navigation, Home, Login, Student, Studentlist} from "./components";

function App() {
  return (
    <div className="App">
  <Router>
    <Navigation />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/student" element={<Student />} />
      <Route path="/studentlist" element={<Studentlist />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>,
    </div>
  );
}

export default App;

