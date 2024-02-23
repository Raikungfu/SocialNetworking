import { TextareaProps } from "@/components/Dashboard/Content/Post";

const Textarea: React.FC<TextareaProps> = (props) => {
  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newValue = event.target.value;
    props.onChange(newValue);
  };

  return (
    <>
      <label htmlFor={props.id} className={props.labelClassname}>
        {props.labelContent}
      </label>
      <textarea
        id={props.id}
        rows={props.numberOfRows}
        className={props.textareaClassname}
        placeholder={props.placeholder}
        onChange={handleTextareaChange}
      ></textarea>
    </>
  );
};

export default Textarea;
