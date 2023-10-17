import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

export const authContext = React.createContext();

const API = "http://35.234.115.220/api/v1/";
const ACCOUNT_ENDPOINT = "account/";

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleRegister = async (user, navigate) => {
    setLoading(true);
    try {
      await axios.post(`${API}${ACCOUNT_ENDPOINT}register/`, user);
      navigate("login/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (user, navigate) => {
    setLoading(true);

    try {
      const response = await axios.post(`${API}${ACCOUNT_ENDPOINT}login/`, {
        email: user.email,
        password: user.password,
      });

      const users = response.data;

      const foundUser = users.find((u) => u.email === user.email);

      if (foundUser && foundUser.password === user.password) {
        toast.success("Вы успешно вошли в аккаунт");

        localStorage.setItem("user", JSON.stringify(foundUser));

        navigate("/");
        window.location.reload();
      } else {
        toast.error("Неверный email или пароль");
      }
    } catch (error) {
      console.log("Произошла ошибка:", error);
      toast.error("Произошла ошибка при входе в аккаунт");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = (navigate) => {
    localStorage.removeItem("user");
    navigate("login/");
    window.location.reload();
  };
  const handleAccountActivation = async (activationCode, navigate) => {
    try {
      const response = await axios.get(
        `${API}${ACCOUNT_ENDPOINT}activate/${activationCode}`
      );

      if (response.status === 200) {
        toast.success("Account activated successfully!");
        navigate("/login");
      } else {
        toast.error("Account activation failed.");
      }
    } catch (error) {
      console.error("Error activating account:", error);
      toast.error("Account activation failed.");
    }
  };

  return (
    <authContext.Provider
      value={{ handleRegister, loading, error, handleLogin, handleLogout }}
    >
      {children}
    </authContext.Provider>
  );
};
export default AuthContextProvider;
