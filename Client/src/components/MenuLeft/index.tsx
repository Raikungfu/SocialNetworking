import "./MenuLeft.scss";
import { NavMenuTextIcon, NavContext } from "./import/data";

const MenuLeft = () => {
  return (
    <div className="flex flex-col h-screen w-[20vw] justify-start px-10">
      <NavMenuTextIcon navContext={NavContext} />
    </div>
  );
};

export default MenuLeft;
