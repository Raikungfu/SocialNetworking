import Story from "./Story";
import "./content.scss";
import { Post } from "./Post";

const Content = () => {
  return (
    <div className="w-full flex flex-col items-center">
        <Story />
        
      <Post />
    </div>
  );
};

export default Content;
