export interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className: string;
}

export interface InputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  types: string;
  inputClassname: string;
  labelClassname: string;
}

export interface CardProps {
  title: string;
  content: string;
  onClick?: () => void;
}

export interface TextareaProps {
  numberOfRows: number;
  id: string;
  textareaClassname: string;
  labelClassname: string;
  placeholder: string;
  labelContent: string;
  onChange?: (newValue: string) => void;
}
