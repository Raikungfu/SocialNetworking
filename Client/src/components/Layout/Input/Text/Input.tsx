import { InputProps } from "@/types/Layout";

const Input: React.FC<InputProps> = (props) => {
  const handleInputchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    props.onChange(newValue);
  };
  return (
    <>
      <label htmlFor={props.id} className={props.labelClassname}>
        {props.label}
      </label>
      <input
        type={props.types}
        className={props.inputClassname}
        name={props.id}
        id={props.id}
        onChange={handleInputchange}
      />
    </>
  );
};

export default Input;
