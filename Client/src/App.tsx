import { Dashboard, Header, Login, Page404, Register } from "@/components";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import "./App.scss";
import withAuth from "./hocs/Authenticated";

const App: React.FC = () => {
  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default withAuth(App);
