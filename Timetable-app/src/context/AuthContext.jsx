import { createContext, useState, useEffect, useContext } from "react";
import jwt_decode from "jwt-decode";
import {
  login as apiLogin,
  logout as apiLogout,
  refreshToken,
} from "../Services/Authservice" ;

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [accessToken, setToken] = useState(null);

  // on mount, try to get a fresh access token
  useEffect(() => {
    (async () => {
      try {
        const token = await refreshToken();
        applyToken(token);
      } catch {
        applyToken(null);
      }
    })();
  }, []);

  function applyToken(token) {
    window.accessToken = token;
    setToken(token);
    if (token) {
      const { exp, ...payload } = jwt_decode(token);
      setUser(payload);
    } else {
      setUser(null);
    }
  }

  async function login(username, password) {
    const { accessToken: token, user: userData } = await apiLogin(
      username,
      password
    );
    applyToken(token);
    return userData;
  }

  async function logout() {
    await apiLogout();
    applyToken(null);
  }

  const isAdmin = () => user?.role === "admin";

  return (
    <AuthContext.Provider value={{ user, login, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
