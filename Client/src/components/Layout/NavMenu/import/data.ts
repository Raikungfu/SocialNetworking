import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Groups";
import ChatIcon from "@mui/icons-material/QuestionAnswer";
import AboutIcon from "@mui/icons-material/Info";
import FeedIcon from "@mui/icons-material/Feed";

const navLink: Array<{
  link: string;
  icon: any;
}> = [
  { link: "", icon: HomeIcon },
  { link: "group", icon: GroupIcon },
  { link: "feed", icon: FeedIcon },
  { link: "chat", icon: ChatIcon },
  { link: "about", icon: AboutIcon },
];

export { HomeIcon, GroupIcon, AboutIcon, FeedIcon, ChatIcon, Link, navLink };
