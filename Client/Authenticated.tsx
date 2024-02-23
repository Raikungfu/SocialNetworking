import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setState } from "./src/hooks/UserSlice";
import { RootState } from "./src/hooks/rootReducer";
import AxiosApi from "@/configs/axios";

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  const WithAuthComponent: React.FC = (props) => {
    const dispatch = useDispatch();
    debugger;
    useEffect(() => {
      const checkLoginStatus = async () => {
        const response = await AxiosApi.get<RootState>("/", true, {});
        if (response.data) {
          dispatch(setState({ state: "active", ...response.data }));
        } else {
          console.error("Error:", response.error);
        }
      };
      checkLoginStatus();
    }, [location.pathname]);
    debugger;
    return <WrappedComponent {...props} />;
  };

  return WithAuthComponent;
};

export default withAuth;
