import React, { useState, useRef, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from 'react-redux';
import UserState from "../../../hooks/UserSlice";
import { logoutUser } from "../../../hooks/UserSlice";
import { RootState } from '../../../hooks/rootReducer';
import Cookies from "js-cookie";

const LogAndReg = () => {
  return (
    <div className="flex flex-row justify-end font-medium gap-x-1.5 basis-[20%]">
      <Link
        to="/login"
        className="bg-white hover:bg-blue-700 hover:text-white text-black py-2 px-4 rounded-full cursor-pointer"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="bg-white hover:bg-blue-700 hover:text-white text-black py-2 px-4 rounded-full cursor-pointer"
      >
        Register
      </Link>
    </div>
  );
};

const UserAccount: React.FC<{name?: String, avt?: String}> = ({name, avt}) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(logoutUser())
    localStorage.clear();
    Cookies.remove('accessToken')
    Cookies.remove('refreshToken')
    nav('/login');
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  const handleMouseLeaveMenu = () => {
    setIsMenuOpen(false);
  };

  const UserAvt = () => {
    return avt === undefined ? <AccountCircleIcon className="items-center" /> : <img src={avt} className="items-center rounded-full size-2"/>
  }

  const UserName = () => {
    return name === undefined ? <span>User</span> : <span>{name}</span>;
  }

  return (
    <div className="user-menu relative basis-[20%] flex flex-row justify-end">
      <div
        className="user-info items-center py-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Stack direction="row" spacing={`${1}vw`}>
          <UserAvt/>
          <UserName/>
        </Stack>
        {isMenuOpen && (
          <div
            className="menu absolute bg-transparent w-full z-50 rounded shadow-lg overflow-hidden border-t-[20px] border-t-transparent"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeaveMenu}
          >
            <ul className="bg-[#827d7d21] dark:bg-slate-950">
              <li className="p-2 hover:bg-[#827d7d21] hover:bg-opacity-80">Profile</li>
              <li className="p-2 hover:bg-[#827d7d21] hover:bg-opacity-80">Settings</li>
              <li className="p-2 hover:bg-[#827d7d21] hover:bg-opacity-80" onClick={handleLogout}>
                Log out
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
interface MyHeaderRightProps {
  initialState: string;
}

const HeaderRight: React.FC<{}> = () => {
  const initialState = useSelector((state: RootState) => state.user.userState);
  const [state, setState] = useState<String>(initialState.state);
  const name = initialState.name;
  const avt = initialState.avt;
  useEffect(() => {
    setState(initialState.state);
  }, [initialState.state]);

  return state !== "unactive" ? <UserAccount name={name as string} avt={avt as string}/> : <LogAndReg />;
};


export default HeaderRight;
