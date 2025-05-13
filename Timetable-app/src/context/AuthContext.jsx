import { createContext, useState, useEffect, useContext } from "react";
import * as jwt_decode from "jwt-decode";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => sessionStorage.getItem("backend-token") || null);

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwt_decode.default(token);
        // Check expiry
        if (decoded.exp && Date.now() >= decoded.exp * 1000) {
          setUser(null);
          setToken(null);
          sessionStorage.removeItem("backend-token");
        } else {
          setUser(decoded);
        }
      } catch {
        setUser(null);
        setToken(null);
        sessionStorage.removeItem("backend-token");
      }
    } else {
      setUser(null);
    }
  }, [token]);

  async function login(username, password) {
    const res = await fetch("/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    if (!res.ok) throw new Error("Login failed");
    const data = await res.json();
    setToken(data.accessToken);
    sessionStorage.setItem("backend-token", data.accessToken);
    return data.user;
  }

  function logout() {
    setToken(null);
    setUser(null);
    sessionStorage.removeItem("backend-token");
  }

  // Helper to get auth header for fetch
  function getAuthHeader() {
    if (!token) return {};
    return { Authorization: `Bearer ${token}` };
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout, getAuthHeader }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
