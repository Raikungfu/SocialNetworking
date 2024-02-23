import { Post } from "@/components";
import Story from "./Story";
import "./content.scss";

const Content = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Story />
      <Post />
    </div>
  );
};

export default Content;
