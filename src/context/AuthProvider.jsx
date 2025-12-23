
//next-admin-panel/src/context/AuthProvider.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { loginApi, registerApi } from "../api/auth.service";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");

      if (storedUser && storedUser !== "undefined") {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("خطا در خواندن کاربر از localStorage:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (data) => {
  const res = await loginApi(data);
  localStorage.setItem("token", res.token);

  // user را دستی بساز
  const user = { username: data.username };
  localStorage.setItem("user", JSON.stringify(user));
  setUser(user);
};



  const register = async (data) => {
    return await registerApi(data);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
