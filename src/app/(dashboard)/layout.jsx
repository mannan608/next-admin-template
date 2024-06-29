import Navbar from "../components/header/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import "@/app/(dashboard)/Dashboard.css";

export default function DashboardLayout({ children }) {
  return (
    <div className="layout-wrapper">
      <div className="layout-left">
        <Sidebar />
      </div>
      <div className="layout-right">
        <Navbar />
        <div class="main-content">
          <div class="container-fluid">
            <div class="page-content ">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
