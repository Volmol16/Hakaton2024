import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "./components/pages/Main";
import { Register } from "./components/pages/register/Register";

const App = () => {
  return (
    <>
      <header>
        <a href="/">Home</a>
        <a href="/register">Register</a>
      </header>
      <Main />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
