import React from "react";
import { Link } from "react-router-dom";

const navLink = [
  {
    name: "Главная",
    link: "/",
  },
  {
    name: "Создать акканунт",
    link: "login",
  },
];

const HeaderPage = () => {
  return (
    <div className="flex space-x-5 justify-between px-20 pt-2 pb-2">
      {navLink.map((data, index) => (
        <header className="text-xl font-medium" key={index}>
          <Link to={data.link}>{data.name}</Link>
        </header>
      ))}
    </div>
  );
};

export default HeaderPage;
