import { ChangeEvent, useState } from "react";
import { ValidationError } from "@formspree/react";

interface TextareaProps {
  label: string;
  name: string;
  value: string;
  prop: any;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function FloatingLabelTextarea({
  label,
  name,
  value,
  prop,
  handleChange,
}: TextareaProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative mb-4 ">
      <label
        htmlFor={name}
        className={`absolute text-sm bg-white px-1 transition-all duration-200 ${
          isFocused || value ? "top-[-10px] text-sm left-2" : "top-2 left-4"
        }`}
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        className="w-full h-24 px-4 border py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onFocus={() => setIsFocused(true)}
        onChange={handleChange}
        onBlur={() => setIsFocused(value !== "")}
      />
      <ValidationError prefix={name} field={name} errors={prop} />
    </div>
  );
}
