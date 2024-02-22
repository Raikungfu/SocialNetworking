export const NewMeeting: React.FC<{}> = ({}) => {

    return (
      <div className="w-full">
        <label
          htmlFor="message"
          className="block mb-2 font-medium text-xl text-gray-900 dark:text-white"
        >
          New Meeting
        </label>
        <textarea
          id="message"
          rows={2}
          className="resize-none overflow-y-auto overscroll-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your content here..."
        ></textarea>
        <div className="flex flex-row justify-between p-2">
          <label htmlFor="FromDate">From: </label>
          <input
            type="datetime-local"
            className="text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-lg px-2"
            name="FromDate"
            id="FromDate"
          />
          <label htmlFor="ToDate">To: </label>
          <input
            type="datetime-local"
            className="text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-lg px-2"
            name="ToDate"
            id="ToDate"
          />
        </div>
      </div>
    );
  };