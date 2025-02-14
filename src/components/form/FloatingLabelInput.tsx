import { ChangeEvent, useState } from "react";
import { ValidationError } from "@formspree/react";

interface InputProps {
  label: string;
  name: string;
  type: string;
  value?: string | number;
  errors?: any;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function FloatingLabelInput({
  label,
  name,
  type,
  value = "",
  errors,
  handleChange,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`relative mb-4 ${name === "discord_id" ? "hidden" : "block"}`}
    >
      <label
        htmlFor={name}
        className={`absolute bg-white px-1 transition-all duration-200 
          ${
            isFocused || value
              ? "top-[-10px] left-2 text-xs"
              : "top-1/2 left-4 text-sm -translate-y-1/2"
          }`}
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="w-full h-10 px-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onFocus={() => setIsFocused(true)}
        onChange={handleChange}
        onBlur={() => setIsFocused(false)}
      />
      {errors && errors[name] && (
        <ValidationError prefix={label} field={name} errors={errors} />
      )}
    </div>
  );
}
