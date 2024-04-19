/* eslint-disable no-unused-vars */
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex justify-end mx-20 mt-5">
        <a
          className="px-5 py-2 bg-slate-500 text-white font-bold text-2xl rounded-lg hover:bg-slate-700 duration-300"
          to="/register"
        >
          Личный кабинет
        </a>
      </div>
    </header>
  );
};

export default Header;
