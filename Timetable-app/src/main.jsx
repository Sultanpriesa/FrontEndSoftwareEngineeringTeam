import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import Login from "./routes/Login";
import Root from "./Routes/Root";
import ErrorPage from "./error-page";
import SchedulePage from "./routes/SchedulePage";
import RequireAuth from "./components/requireAuth";
import ClassesPage from "./routes/ClassesPage";
import InstructorsPage from "./routes/InstructorsPage";
import StudentsPage from "./routes/StudentsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route
        path="/unauthorized"
        element={
          <div className="flex items-center justify-center h-screen text-2xl text-red-600">
            Unauthorized: You do not have access to this page.
          </div>
        }
      />
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        {/* Redirect / to /dashboard */}
        <Route
          path="/"
          element={<RequireAuth allowedRoles={["admin", "user", "tutor"]} />}
        >
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<SchedulePage />} />
          <Route path="classes" element={<ClassesPage />} />
          <Route
            path="instructors"
            element={
              <RequireAuth allowedRoles={["admin"]}>
                <InstructorsPage />
              </RequireAuth>
            }
          />
          <Route
            path="students"
            element={
              <RequireAuth allowedRoles={["admin", "tutor"]}>
                <StudentsPage />
              </RequireAuth>
            }
          />
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
