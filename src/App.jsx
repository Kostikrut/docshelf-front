import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import ForgotPasswordPage from "./pages/forgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import AccountPage from "./pages/accountPage";
import SignupPage from "./pages/signupPage";
import LoginPage from "./pages/loginPage";
import SettingsPage from "./pages/settingsPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Reminders from "./pages/Reminders";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
        <Route path="/resetPassword/:token" element={<ResetPasswordPage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>

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
