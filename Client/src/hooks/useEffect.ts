import AxiosApi from "@/configs/axios";
import { useEffect } from "react";
import { setState } from "./UserSlice";
import { RootState } from "./rootReducer";
import { useDispatch } from "react-redux";

const dispatch = useDispatch()

const ue = useEffect();
export const getUserInfo = () => (dispatch: any) => {
  // console.log("get user info");
  return new Promise((resolve, reject) => {
    try {
      let token = localStorage.getItem('token') || '';
      if (!token) throw Error('no_auth');
      AxiosApi.post('/api/userinfo', null, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
          resolve(setState(dispatch)(RootState.setUserInfo({ ...res.data })))
        }).catch(err => {
          switch (err.response?.status) {
            case 401:
              alert('로그인이 필요합니다.');
              window.location.href = '/login';
              break;
            default:
              throw err;
          }
        });
    } catch (error) {
      reject(error);
    };
  });
}

function setState(dispatch: Dispatch<AnyAction>) {
  return (state: Partial<RootState['user']>): ThunkAction<void, RootState, unknown, AnyAction> => dispatch(RootState.user.setState(state));
  return (state: Partial<RootState['user']>): void => {
    dispatch({ type: 'USERINFO_SETSTATE', payload: state });
  }
}

export function checkAuth() {
  return dispatch => new Promise((resolve, reject) => {
    try {
      let token = localStorage.getItem("token");
      if (!token) {
        // 로그인하지 않은 경우
        dispatch({ type: "AUTH_CHECK_FAILURE" });
        resolve(false);
      } else {
        jwt.verify(token as string, process.env.REACT_APP_JWT_SECRET as string, (err: jwt.VerifyErrors | null) => {
        jwt.verify(token as string, process.env.REACT_APP_JWTSECRET!, { ignoreExpiration: false }, (err: jwt.VerifyErrors | null, decoded: jwt.Decoded
        jwt.verify(token as string, process.env.REACT_APP_JWTSECRET!, { ignoreExpiration: false }, (err: jwt.Ver
        jwt.verify(token as string, process.env.REACT_APP_JWTSECRET!, { ignoreExpiration: false }, (err: jwt.VerifyErrors | null, decoded: jwt.Decoded
        jwt.verify(token as string, process.env.REACT_APP_JWTSECRET!, {},
          (err: jwt.VerifyErrors | null, decoded: jwt.
// ue.fetchAuth = () => {
    
//     const checkLoginStatus = async () => {
//       try {
//         const response = await AxiosApi.get<RootState>("/", true, {});
//         if (response.data) {
//           dispatch(setState({ state: "active", ...response.data }));
//         } else {
//           console.error("Error:", response.error);
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };
//     checkLoginStatus();
//   }, [dispatch, location.pathname]);

//   export default ue;