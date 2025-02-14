import { ChangeEvent, useState } from "react";
import { ValidationError } from "@formspree/react";

interface InputProps {
  label: string;
  name: string;
  type: string;
  value?: string | number;
  prop: any;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function FloatingLabelInput({
  label,
  name,
  type,
  value,
  prop,
  handleChange,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`relative mb-4 ${name === "discord_id" ? "hidden" : "block"} `}
    >
      <label
        htmlFor={label}
        className={`absolute w-max text-sm  bg-white px-1 transition-all duration-200 ${
          isFocused || value
            ? "top-[-10px] text-sm left-2"
            : "top-1/2 -translate-y-1/2 left-4"
        }`}
      >
        {name}
      </label>
      <input
        type={type}
        id={label}
        name={name}
        className="w-full h-10 px-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onFocus={() => setIsFocused(true)}
        onChange={handleChange}
        onBlur={() => setIsFocused(false)}
      />
      <ValidationError prefix={name} field={name} errors={prop} />
    </div>
  );
}
