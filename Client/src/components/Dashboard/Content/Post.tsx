import { useState } from "react";
import { NewPost } from "./NewPost";
import { NewMeeting } from "./NewMeeting";
import { NewStory } from "./NewStory";


export const Post = () => {
  const [isNewPost, setIsNewPost] = useState(true);
  const [isNewMeeting, setIsNewMeeting] = useState(false);

  const handleClickNewPost = () => {
    setIsNewPost(true);
    setIsNewMeeting(false);
  };

  const handleClickNewMeeting = () => {
    setIsNewMeeting(true);
    setIsNewPost(false);
  };

  const handleClickNewStory = () => {
    setIsNewPost(false);
    setIsNewMeeting(false);
  };

  const InputComp = () => {
    if (isNewPost) return <NewPost />;
    else if (isNewMeeting) return <NewMeeting />;
    else return <NewStory />;
  };

  return (
    <div className="w-8/12 flex flex-col py-10 justify-between">
      <div className="flex flex-row gap-[18px] items-center justify-end">
        <button
          className="bg-opacity-30 text-xs md:text-base rounded-[5px] bg-[#827d7d21] hover:bg-slate-200 px-[5px] md:px-[15px] py-[5px]"
          onClick={handleClickNewPost}
        >
          New Post
        </button>
        <button
          className="bg-opacity-30 text-xs md:text-base rounded-[5px] bg-[#827d7d21] hover:bg-slate-200 px-[5px] md:px-[15px] py-[5px]"
          onClick={handleClickNewMeeting}
        >
          New Meeting
        </button>
        <button
          className="bg-opacity-30 text-xs md:text-base rounded-[5px] bg-[#827d7d21] hover:bg-slate-200 px-[5px] md:px-[15px] py-[5px]"
          onClick={handleClickNewStory}
        >
          New Story
        </button>
      </div>
      <InputComp/>
      
      <button className="bg-opacity-30 text-xs md:text-base border-solid bg-[#827d7d21] hover:bg-slate-200 border-[#fcfcfca1] border-[1px] rounded-[5px] p-2 px-[20px] md:px-[70px] mt-2 self-end">Post</button>
    </div>
  );
};
