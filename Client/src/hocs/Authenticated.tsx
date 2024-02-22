import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setState, logoutUser } from "../hooks/UserSlice";
import { RootState } from "../hooks/rootReducer";
import AxiosApi from "@/configs/axios";
import Cookies from "js-cookie";

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  const WithAuthComponent: React.FC = (props) => {
    const dispatch = useDispatch();
    const nav = useNavigate()
    const refreshToken = Cookies.get('refreshToken')
    if (!refreshToken && location.href !== "http://localhost:5000/login" && location.href !== "http://localhost:5000/register") {
      nav("/login")
    }
    useEffect(() => {
      const checkLoginStatus = async () => {
        const response = await AxiosApi.get<RootState>("/", true, {});
        if (response.data) {
          dispatch(setState({ state: "active", ...response.data }));
        } else {
          console.error("Error:", response.error);
          nav("./login")
        }
      };
      checkLoginStatus();
    }, [location]);

    return <WrappedComponent {...props} />;
  };

  return WithAuthComponent;
};

export default withAuth;
