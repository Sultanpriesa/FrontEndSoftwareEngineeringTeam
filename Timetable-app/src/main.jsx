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
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<Login />} />
      <Route path="Schedule" element={<ProtectedRoute requireAdmin />}>
        <Route index element={<SchedulePage />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
