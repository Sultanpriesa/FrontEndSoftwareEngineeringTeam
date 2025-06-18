import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";

export default function Root() {
  return (
    <div className="h-screen flex flex-col bg-base-300" data-theme="dark">
      <div className="flex flex-1 min-h-0">
        <aside className="w-64 bg-white border-r min-h-0 flex flex-col">
          <Sidebar />
        </aside>
        <div className="flex-1 flex flex-col min-h-0">
          <Header />
          <main className="flex-1 overflow-auto p-6">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
