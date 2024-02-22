import { Dashboard, Header, Login, Page404, Register } from "@/components";
import { Route, Routes, Link, useLocation, Outlet } from "react-router-dom";
import "./App.scss";
import withAuth from "./hocs/Authenticated";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
          <Route index element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default withAuth(App);
