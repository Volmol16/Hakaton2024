import React from "react";
import HeaderPage from "./HeaderPage";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <main className="mt-40">
      <div className="text-center space-y-5">
        <div className="flex gap-x-5 justify-center">
          <span className="bg-[#b4b4b4] rounded-lg px-1">#ВебПрактик</span>
          <span className="bg-[#b4b4b4] rounded-lg px-1">#Хакатон</span>
          <span className="bg-[#b4b4b4] rounded-lg px-1">#СвояКоманда</span>
        </div>
        <h1 className="text-5xl font-bold">ВебПрактик</h1>
        <p className="max-w-[500px] mx-auto">
          Добро пожаловать на ВебПрактик, здесь ты можешь легко добавить свою
          команду, которая учавствует на Хакатоне
        </p>
        <div className="space-x-5">
          <button className="py-3 px-5 bg-[#b4b4b4] rounded-lg hover:bg-[#727272] duration-300">
            Создать аккаунт
          </button>
          <button className="py-3 px-5 bg-[#b4b4b4] rounded-lg hover:bg-[#727272] duration-300">
            Профиль
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mx-20 mt-10">
        <div>
          <div className="w-96 h-52 bg-[#b4b4b4] rounded-lg "></div>
          <Link className="flex justify-center" to="/team">
            Команда
          </Link>
        </div>
        <div>
          <div className="w-96 h-52 bg-[#b4b4b4] rounded-lg "></div>
          <Link className="flex justify-center" to="/team">
            Команда
          </Link>
        </div>
        <div>
          <div className="w-96 h-52 bg-[#b4b4b4] rounded-lg "></div>
          <Link className="flex justify-center" to="/team">
            Команда
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
