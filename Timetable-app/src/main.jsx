import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Login from "./Routes/Login";
import Root from "./Routes/Root";
import ErrorPage from "./error-page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<Login />} />
      <Route path="dashboard" element={<ProtectedRoute requireAdmin />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="settings" element={<ProtectedRoute requireAdmin />}>
        <Route index element={<Settings />} />
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
