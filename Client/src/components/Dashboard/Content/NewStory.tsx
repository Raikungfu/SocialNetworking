export const NewStory: React.FC<{}> = ({}) => {
    return (
      <div className="">
        <label
          htmlFor="message"
          className="block mb-2 font-medium text-xl text-gray-900 dark:text-white"
        >
          New Story
        </label>
        <div className="flex flex-col">
          <div className="flex flex-row justify-start">
            <label htmlFor="video" className="basis-[20%]">
              Add Video
            </label>
            <i>
            <input
              type="file"
              name="video"
              id="video"
              className="basis-[50%]"
              accept=".mp4, .mov, .avi"
            />
            </i>
            
          </div>
          <div className="mb-6"></div>
          <div className="flex flex-row justify-start">
            <label htmlFor="images" className="basis-[20%]">
              Add Images
            </label>
            <input type="file" name="images" id="images" multiple />
          </div>
        </div>
      </div>
    );
  };