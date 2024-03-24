import { Dashboard, Login, Page404, Register } from "@/pages";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import withAuth from "./hocs/Authenticated";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="register" element={<Register />} /> */}
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default App;
