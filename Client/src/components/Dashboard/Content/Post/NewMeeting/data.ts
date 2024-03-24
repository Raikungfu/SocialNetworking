export const TextareaSetup = {
  numberOfRows: 2,
  id: "meetingContent",
  textareaClassname:
    "resize-none overflow-y-auto overscroll-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
  labelClassname:
    "text-left block my-5 font-medium text-xl text-gray-900 dark:text-white",
  placeholder: "Write your thoughts here...",
  labelContent: "New Meeting",
};

export const DatetimeInputSetup = {
  dateTime: [
    {
      id: "dateFrom",
      label: "From: ",
      value: "",
      type: "datetime-local",
      inputClassname:
        "text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-lg px-2",
      labelClassname: "",
    },
    {
      id: "dateTo",
      label: "To: ",
      value: "",
      type: "datetime-local",
      inputClassname:
        "text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-lg px-2",
      labelClassname: "",
    },
  ],
};
