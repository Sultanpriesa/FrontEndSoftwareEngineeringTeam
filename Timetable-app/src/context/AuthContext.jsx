import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => sessionStorage.getItem("backend-token") || null);

  useEffect(() => {
    if (token) {
      // Simulate decoding a JWT token
      try {
        const decoded = JSON.parse(atob(token.split('.')[1]));
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
    // Hardcoded credentials: admin/admin or student/student
    if (
      (username === "admin" && password === "admin") ||
      (username === "student" && password === "student")
    ) {
      // Create a fake JWT payload
      const payload = {
        id: username === "admin" ? 1 : 2,
        username,
        role: username === "admin" ? "admin" : "user",
        exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour expiry
      };
      // Fake JWT: header.payload.signature (we only care about payload)
      const fakeToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
        btoa(JSON.stringify(payload)) +
        ".signature";
      setToken(fakeToken);
      sessionStorage.setItem("backend-token", fakeToken);
      setUser(payload);
      return payload;
    } else {
      throw new Error("Login failed");
    }
  }

  function logout() {
    setToken(null);
    setUser(null);
    sessionStorage.removeItem("backend-token");
  }

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
