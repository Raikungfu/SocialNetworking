import Textarea from "@/components/Layout/Input/TextArea/Textarea";
import { TextareaSetup } from "./data";
import { useState } from "react";

export const NewPost: React.FC = () => {
  const [text, setText] = useState("");

  const handleTextareaChange = (text: string) => {
    setText(text);
  };

  return (
    <div className="w-full">
      <Textarea {...TextareaSetup} onChange={handleTextareaChange} />
      <span>{text}</span>
    </div>
  );
};
