// App.js
import React from "react";
// import "./App.css";
import { Routes, Route,  useLocation } from "react-router-dom";
import ButtonAppBar from "./Components/navbar";
import Register from "./Components/Register/register";
import Login from "./Components/Login/loginpage";
import Error from "./Components/Error";
import Home from "./Components/Home/home";
import Play from "./Components/Play";
// import { Switch } from "@mui/material";

function App() {
  const location = useLocation();
  return (
    <>
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Startgame" element={<Play />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
