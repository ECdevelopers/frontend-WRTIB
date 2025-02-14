import { ChangeEvent, useState } from "react";
import { ValidationError } from "@formspree/react";

interface TextareaProps {
  label: string;
  name: string;
  value: string;
  errors?: any;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function FloatingLabelTextarea({
  label,
  name,
  value,
  errors,
  handleChange,
}: TextareaProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div className="relative mb-4">
      <label
        htmlFor={name}
        className={`absolute text-sm bg-white px-1 transition-all duration-200 
          ${
            isFocused || value
              ? "top-[-10px] text-xs left-2"
              : "top-3 left-4 text-gray-500"
          }`}
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder=""
        className="w-full h-24 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onFocus={() => setIsFocused(true)}
        onChange={handleChange}
        onBlur={() => setIsFocused(value.trim() !== "")}
      />
      {errors && <ValidationError prefix={name} field={name} errors={errors} />}
    </div>
  );
}
