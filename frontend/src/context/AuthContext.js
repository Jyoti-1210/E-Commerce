import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  // ====================================
  // ✅ CURRENT USER
  // ====================================
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem("currentUser");
    return saved ? JSON.parse(saved) : null;
  });

  // ====================================
  // ✅ SAVE USER TO LOCAL STORAGE
  // ====================================
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify(currentUser)
      );
    }
  }, [currentUser]);

  // ====================================
  // ✅ REGISTER USER (BACKEND)
  // ====================================
  const registerUser = async (name, email, password, role) => {
    const res = await axios.post(
      "http://localhost:5000/api/auth/register",
      {
        name,
        email,
        password,
        role,
      }
    );

    return res.data;
  };

  // ====================================
  // ✅ LOGIN USER (BACKEND FIXED)
  // ====================================
  const loginUser = async (email, password) => {

    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      {
        email,      // ONLY email
        password,   // ONLY password
      }
    );

    // save token
    localStorage.setItem("token", res.data.token);

    // clean user object
    const user = {
      ...res.data.user,
      role: res.data.user.role?.trim().toLowerCase(),
    };

    setCurrentUser(user);

    localStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    );

    return res.data;
  };

  // ====================================
  // ✅ LOGOUT
  // ====================================
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  // ====================================
  // ✅ CONTEXT VALUE
  // ====================================
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        registerUser,
        loginUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};