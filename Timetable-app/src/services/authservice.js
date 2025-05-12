// src/services/authService.js
// Replaces axios with fetch and uses react-router techniques

const LOGIN_URL   = "/auth/login";
const REFRESH_URL = "/auth/refresh";
const LOGOUT_URL  = "/auth/logout";

export async function login(username, password) {
  const res = await fetch(LOGIN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ username, password })
  });
  if (!res.ok) throw new Error('Login failed');
  return await res.json();
}

export async function refreshToken() {
  const res = await fetch(REFRESH_URL, {
    method: 'GET',
    credentials: 'include',
  });
  if (!res.ok) throw new Error('Refresh failed');
  const data = await res.json();
  return data.accessToken;
}

export async function logout() {
  await fetch(LOGOUT_URL, {
    method: 'POST',
    credentials: 'include',
  });
}
