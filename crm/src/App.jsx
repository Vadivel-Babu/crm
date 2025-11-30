import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import ContactPage from "./pages/Contactcenter/ContactPage";
import AnalyticsPage from "./pages/Analytics/AnalyticsPage";
import TeamsPage from "./pages/Team/TeamsPage";
import ChatbotPage from "./pages/Chatpage/ChatbotPage";
import SettingPage from "./pages/Settingpage/SettingPage";
import "./App.css";
import PagenotFound from "./pages/PagenotFound";
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./context/AuthContext";

function App() {
  const { token } = useAuth();
  return (
    <>
      <div className="app">
        {/* Show sidebar only if logged in */}
        {token && <Sidebar />}

        <Routes>
          {/* PUBLIC ROUTES */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="/signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />

          {/* PROTECTED ROUTES */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <ContactPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/analytics"
            element={
              <ProtectedRoute>
                <AnalyticsPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/chat"
            element={
              <ProtectedRoute>
                <ChatbotPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/teams"
            element={
              <ProtectedRoute>
                <TeamsPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/setting"
            element={
              <ProtectedRoute>
                <SettingPage />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<PagenotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
