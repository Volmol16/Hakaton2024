import React from "react";

const Register = () => {
  return (
    <div>
      <div>
        <h1 className="text-center">Регитсрация</h1>
        <div className="flex flex-col items-center gap-y-5">
          <div className="flex gap-x-5">
            <p>Название команды:</p>
            <input type="text" placeholder="Введите название команды" />
          </div>
          <div className="flex gap-x-5">
            <p>Баннер:</p>
            <input type="file" placeholder="Ваш баннер" />
          </div>
          <div className="flex gap-x-5">
            <p>Название команды:</p>
            <input type="text" placeholder="Введите название команды" />
          </div>
          <div className="flex gap-x-5">
            <p>Название команды:</p>
            <input type="text" placeholder="Введите название команды" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
