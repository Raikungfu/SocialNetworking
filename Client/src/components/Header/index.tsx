import { HeaderRight, Outlet, LogoMain, NavMenu } from "./libs/headerLibs";

import "./header.scss";

const header: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header shadow-md bg-white dark:bg-slate-950 dark:text-white w-screen fixed z-50">
        <nav className="flex flex-row justify-between items-center px-10">
          <div className="basis-[20%] flex flex-row justify-start items-center">
            <LogoMain />
          </div>
          <NavMenu />
          <HeaderRight />
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default header;
