import React from "react";
import "./App.css";
import { Routes,Route } from 'react-router-dom';

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rooms/" element={<Rooms />}></Route>
          <Route path="/rooms/:slug" element={<SingleRoom />}></Route>
          <Route path="*" element={<Error />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
    </div>
  );
}

export default  App;