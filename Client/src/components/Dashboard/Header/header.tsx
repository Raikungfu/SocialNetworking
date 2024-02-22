import { useState } from "react";
import logo from "../../../assets/img/logo.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Groups";
import ChatIcon from "@mui/icons-material/QuestionAnswer";
import AboutIcon from "@mui/icons-material/Info";
import FeedIcon from "@mui/icons-material/Feed";
import Stack from "@mui/material/Stack";
import HeaderRight from "./HeaderRight"

import "./header.scss";
import MenuLeft from "../Menu/MenuLeft";

import { useSelector } from "react-redux";
interface THeaderComp {
  
}


const header: React.FC<THeaderComp> = ({}) => {
  
  return (
    <div className="App">
          <header className="App-header shadow-md bg-white dark:bg-slate-950 dark:text-white w-screen fixed z-50">
            <nav className="flex flex-row justify-between items-center px-10">
              <div className="basis-[20%] flex flex-row justify-start items-center">
                <img src={logo} alt="" className="App-logo p-1 cursor-pointer" />
              </div>

              <ul className="font-light cursor-pointer flex-1 flex flex-row justify-around">
                  <Link to="/" className="focus:text-red-500 focus:bg-[#827d7d21] focus:rounded-lg text-gray">
                    <li className="hover:bg-[#827d7d21] hover:dark:bg-white hover:bg-opacity-30 p-3 border-red-500 rounded-x rounded-lg pl-3 pr-3">
                      <HomeIcon fontSize="medium" />
                    </li>
                  </Link>
                  <Link to="/feeds" className="focus:text-red-500 focus:bg-[#827d7d21] focus:rounded-lg text-gray">
                    <li className="hover:bg-[#827d7d21] hover:dark:bg-white hover:bg-opacity-30 p-3 border-red-500 rounded-x rounded-lg pl-3 pr-3">
                      <FeedIcon fontSize="medium" />
                    </li>
                  </Link>
                  <Link to="/groups" className="focus:text-red-500 focus:bg-[#827d7d21] focus:rounded-lg text-gray">
                    <li className="hover:bg-[#827d7d21] hover:dark:bg-white hover:bg-opacity-30 p-3 border-red-500 rounded-x rounded-lg pl-3 pr-3">
                      <GroupIcon fontSize="medium" />
                    </li>
                  </Link>
                  <Link to="/chats" className="focus:text-red-500 focus:bg-[#827d7d21] focus:rounded-lg text-gray">
                    <li className="hover:bg-[#827d7d21] hover:dark:bg-white hover:bg-opacity-30 p-3 border-red-500 rounded-x rounded-lg pl-3 pr-3">
                      <ChatIcon fontSize="medium" />
                    </li>
                  </Link>
                  <Link to="/about" className="focus:text-red-500 focus:bg-[#827d7d21] focus:rounded-lg text-gray">
                    <li className="hover:bg-[#827d7d21] hover:dark:bg-white hover:bg-opacity-30 p-3 border-red-500 rounded-x rounded-lg pl-3 pr-3">
                      <AboutIcon fontSize="medium" />
                    </li>
                  </Link>
              </ul>
              <HeaderRight/>
            </nav>
          </header>
    </div>
  );
};

export default header;
