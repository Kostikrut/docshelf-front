import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import ForgotPassword from "./pages/forgotPasswordPage";
import ResetPassword from "./pages/ResetPasswordPage";
import Account from "./pages/accountPage";
import Signup from "./pages/signupPage";
import Login from "./pages/loginPage";
import Settings from "./pages/settingsPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/DashboardPage";
import Reminders from "./pages/RemindersPage";
import FileSystem from "./pages/FileSystemPage";

import NavBar from "./components/NavBar";
import SideBar from "./components/Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar collapsed={!isSidebarOpen} />

      <div className="flex flex-col flex-1 overflow-hidden">
        <NavBar toggleSidebar={toggleSidebar} />
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/resetPassword/:token" element={<ResetPassword />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reminders" element={<Reminders />} />
            <Route path="/file-system" element={<FileSystem />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/account" element={<Account />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </div>
      </div>

      <Toaster
        toastOptions={{
          duration: 3000,
          style: {
            background: "#605dff",
            color: "#fff",
            borderRadius: "8px",
            padding: "16px",
            fontSize: "14px",
          },
        }}
        limit={1}
      />
    </div>
  );
}

export default App;
