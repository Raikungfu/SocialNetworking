import { ButtonProps } from "@/types/Layout";
import { useState } from "react";

const Button: React.FC<ButtonProps> = (props) => {
  [isClick, setIsClick] = useState(false);
  const handleClick = (event: ) => {
    event.preventDefault();
    setIsClick(!isClick);
  };

  return (
    <button
          className={props.className}
          onClick={handleClick}
        >
          New Post
        </button>
  );
};

export default Button;
