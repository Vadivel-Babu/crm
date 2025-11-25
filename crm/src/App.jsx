import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import ContactPage from "./pages/ContactPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import TeamsPage from "./pages/TeamsPage";
import ChatbotPage from "./pages/ChatbotPage";
import SettingPage from "./pages/SettingPage";
import "./App.css";
import PagenotFound from "./pages/PagenotFound";

function App() {
  return (
    <>
      <div className="app">
        <Sidebar />
        <Routes>
          {/* <Route path={"/login"} exact element={<Login />} />
          <Route path={"/signup"} exact element={<Signup />} /> */}
          <Route>
            <Route path={"/"} exact element={<DashboardPage />} />
            <Route path={"/contact"} exact element={<ContactPage />} />
            <Route path={"/analytics"} exact element={<AnalyticsPage />} />
            <Route path={"/chat"} exact element={<ChatbotPage />} />
            <Route path={"/teams"} exact element={<TeamsPage />} />
            <Route path={"/setting"} exact element={<SettingPage />} />
          </Route>
          <Route path={"*"} exact element={<PagenotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
