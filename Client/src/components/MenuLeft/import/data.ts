import GroupIcon from "@mui/icons-material/Diversity1TwoTone";
import FriendRequestIcon from "@mui/icons-material/GroupAddTwoTone";
import NewsIcon from "@mui/icons-material/NewspaperTwoTone";
import PagesIcon from "@mui/icons-material/DocumentScannerTwoTone";
import MarketIcon from "@mui/icons-material/StorefrontTwoTone";
import NavMenuTextIcon from "@/components/Layout/NavMenu/NavMenuTextIcon";

const NavContext = [
  {
    link: "/group",
    context: "Groups",
    id: "groups",
    icon: GroupIcon,
    classColor: "text-red-500",
  },
  {
    link: "/friends-request",
    context: "Friends Request",
    id: "friends-request",
    icon: FriendRequestIcon,
    classColor: "text-purple-500",
  },
  {
    link: "/news",
    context: "News",
    id: "news",
    icon: NewsIcon,
    classColor: "text-green-500",
  },
  {
    link: "/pages",
    context: "Pages",
    id: "pages",
    icon: PagesIcon,
    classColor: "text-blue-500",
  },
  {
    link: "/market",
    context: "Market",
    id: "market",
    icon: MarketIcon,
    classColor: "text-yellow-300",
  },
];

export { NavMenuTextIcon, NavContext };
