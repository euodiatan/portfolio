import { useState } from 'react'
import './App.css'
import MainLayout from './MainLayout';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Projects" element={<Projects/>}/>
      </Route>
    </Routes>
    
    </>
  )
}

export default App
