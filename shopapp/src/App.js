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


// {
//   "name": "shopping",
//   "version": "0.1.0",
//   "private": true,
//   "dependencies": {
//     "@reduxjs/toolkit": "^1.9.5",
//     "@testing-library/jest-dom": "^5.16.5",
//     "@testing-library/react": "^13.4.0",
//     "@testing-library/user-event": "^13.5.0",
//     "axios": "^1.4.0",
//     "body-parser": "^1.20.2",
//     "bootstrap": "^5.0.1",
//     "cors": "^2.8.5",
//     "crypto": "^1.0.1",
//     "dotenv": "^16.3.1",
//     "express": "^4.18.2",
//     "razorpay": "^2.9.1",
//     "react": "^18.2.0",
//     "react-dom": "^18.2.0",
//     "react-icons": "^4.10.1",
//     "react-redux": "^8.1.1",
//     "react-router-dom": "^6.14.2",
//     "react-scripts": "5.0.1",
//     "redux": "^4.2.1",
//     "util": "^0.12.5",
//     "web-vitals": "^2.1.4"
//   },
//   "scripts": {
//     "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",
//     "eject": "react-scripts eject"
//   },
//   "eslintConfig": {
//     "extends": [
//       "react-app",
//       "react-app/jest"
//     ]
//   },
//   "browserslist": {
//     "production": [
//       ">0.2%",
//       "not dead",
//       "not op_mini all"
//     ],
//     "development": [
//       "last 1 chrome version",
//       "last 1 firefox version",
//       "last 1 safari version"
//     ]
//   }
// }
