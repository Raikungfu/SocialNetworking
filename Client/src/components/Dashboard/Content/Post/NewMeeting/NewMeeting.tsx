import Textarea from "@/components/Layout/Input/TextArea/Textarea";
import { useState } from "react";
import { TextareaSetup, DatetimeInputSetup } from "../NewMeeting/data";
import { Input } from "@/components";

export const NewMeeting: React.FC = () => {
  const [text, setText] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const handleTextareaChange = (text: string) => {
    setText(text);
  };

  const handleDateFromChange = (dateFrom: string) => {
    setDateFrom(dateFrom);
  };

  const handleDateToChange = (dateTo: string) => {
    setDateTo(dateTo);
  };

  return (
    <>
      <div className="w-full">
        <Textarea {...TextareaSetup} onChange={handleTextareaChange} />
        <div className="flex flex-row justify-between py-2">
          {DatetimeInputSetup.dateTime.map((item) => (
            <Input
              types={item.type}
              onChange={
                item.id === "dateFrom"
                  ? handleDateFromChange
                  : handleDateToChange
              }
              {...item}
            />
          ))}
          ;
        </div>
        <span>{dateFrom}</span>
        <span>{dateTo}</span>
        <span>{text}</span>
      </div>
    </>
  );
};
