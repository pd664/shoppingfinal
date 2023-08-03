import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Header from './components/header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllData } from './reduxComponents/action/index'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch()
  dispatch(fetchAllData())
  return (
    <div>
    <BrowserRouter>
      <Header />
      <Home />
    </BrowserRouter>
    </div>
  )
}

export default App
