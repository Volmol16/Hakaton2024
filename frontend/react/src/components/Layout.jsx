import React from "react";
// eslint-disable-next-line no-unused-vars
import { Link, Outlet } from "react-router-dom";
import Header from "./pages/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export { Layout };
