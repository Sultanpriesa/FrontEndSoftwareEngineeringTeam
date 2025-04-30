
// src/services/authService.js
import axios from "../api/axios";

const LOGIN_URL   = "/auth/login";
const REFRESH_URL = "/auth/refresh";
const LOGOUT_URL  = "/auth/logout";

export async function login(username, password) {
  const res = await axios.post(LOGIN_URL, { username, password });
  // backend sets a secure httpOnly cookie for refreshToken
  return res.data; // { accessToken: "...", user: { id, role, ... } }
}

export async function refreshToken() {
  const res = await axios.get(REFRESH_URL);
  return res.data.accessToken;
}

export async function logout() {
  await axios.post(LOGOUT_URL);
}
