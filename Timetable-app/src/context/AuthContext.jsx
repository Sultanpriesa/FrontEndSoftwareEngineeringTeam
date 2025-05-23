import React, { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext(null);

// Mock user data with tutor role
const mockUsers = {
  admin: { username: "admin", password: "admin", role: "admin" },
  john: { username: "john", password: "user", role: "user" },
  tutor: {
    username: "tutor",
    password: "tutor",
    role: "tutor",
    assignedClasses: [1, 2, 3], // Changed to numbers to match event IDs
  },
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = sessionStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
    } else {
      sessionStorage.removeItem("user");
    }
  }, [user]);

  const login = async (username, password) => {
    const foundUser = mockUsers[username];
    if (foundUser && foundUser.password === password) {
      setUser(foundUser);
      return Promise.resolve(true);
    }
    return Promise.reject("Invalid credentials");
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
