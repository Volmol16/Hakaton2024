import React from "react";

const Register = () => {
  return (
    <div className="mt-10">
      <div>
        <h1 className="text-center">Регистрация</h1>
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
            <p>Участник:</p>
            <button>Добавить участника!</button>
          </div>
          <div className="flex gap-x-5">
            <p>Электронная почта:</p>
            <input type="mail" placeholder="Введите почту" />
          </div>
          <div className="flex gap-x-5">
            <p>Логин:</p>
            <input type="text" placeholder="Введите логин" />
          </div>
          <div className="flex gap-x-5">
            <p>Пароль:</p>
            <input type="password" placeholder="Введите пароль" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
