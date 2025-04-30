import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";

export default function Root() {
  return (
    <div className="h-screen flex flex-col">
      <Header />

      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
