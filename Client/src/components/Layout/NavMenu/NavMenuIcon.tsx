import { Link, navLink } from "./import/data";

const NavMenu: React.FC = () => {
  return (
    <>
      <ul className="font-light cursor-pointer flex-1 flex flex-row justify-around">
        {navLink.map(({ link, icon: Icon }, index) => (
          <Link
            key={index}
            to={`/${link}`}
            className="focus:text-red-500 focus:bg-[#827d7d21] focus:rounded-lg text-gray"
          >
            <li className="hover:bg-[#827d7d21] hover:dark:bg-white hover:bg-opacity-30 p-3 border-red-500 rounded-x rounded-lg pl-3 pr-3">
              <Icon />
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
