import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import Login from "./Routes/Login";
import Root from "./Routes/Root";
import ErrorPage from "./error-page";
import SchedulePage from "./routes/SchedulePage";
import RequireAuth from "./components/requireAuth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/unauthorized" element={<div className='flex items-center justify-center h-screen text-2xl text-red-600'>Unauthorized: You do not have access to this page.</div>} />
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route
          path="dashboard"
          element={<RequireAuth allowedRoles={['admin', 'user']} />}
        >
          <Route index element={<SchedulePage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
