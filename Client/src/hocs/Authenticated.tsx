import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setState, logoutUser } from "../hooks/UserSlice";
import { RootState } from "../hooks/rootReducer";
import AxiosApi from "@/configs/axios";

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  const WithAuthComponent: React.FC = (props) => {
    interface responseData {
      username: String;
    }
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
      const checkLoginStatus = async () => {
        const response = await AxiosApi.get<responseData>(
          "/",
          true,
          {}
        );
        if (response.data) {
          dispatch(setState({state: 'active', ...response.data }));
        } else {
          console.error("Error:", response.error);
        }
      };
      checkLoginStatus();
    }, [location.pathname]);

    return <WrappedComponent {...props} />;
  };

  return WithAuthComponent;
};

export default withAuth;
