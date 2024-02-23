import { Link } from "react-router-dom";

interface NavMenuTextIconType {
  navContext: Array<{
    link: string;
    context: string;
    id: string;
    icon: any;
    classColor: string;
  }>;
}

const NavMenuTextIcon: React.FC<NavMenuTextIconType> = (props) => {
  return (
    <>
      <ul className="flex flex-col gap-2 my-20">
        {props.navContext.map(
          ({ link, context, id, icon: Icon, classColor }) => (
            <Link to={link}>
              <li
                key={id}
                className="flex flex-row justify-start px-2 gap-5 py-3 md:w-full font-normal hover:bg-[#827d7d21] hover:dark:bg-white hover:dark:bg-transparent hover:dark:bg-opacity-25 rounded-lg block dark:text-white"
              >
                <Icon className={classColor} />
                <span className="menu-title">{context}</span>
              </li>
            </Link>
          )
        )}
      </ul>
    </>
  );
};

export default NavMenuTextIcon;
