import { FiSend } from "react-icons/fi";
import FloatingLabelInput from "./FloatingLabelInput";
import FloatingLabelTextarea from "./FloatingLabelTextArea";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "@formspree/react";
import { useBackBlur } from "../../context/BackdropProvider";

interface FornInterface {
  name: string;
  subjek: string;
  pesan: string;
}

const Form = () => {
  const { toggleSetAlert } = useBackBlur();
  const [form, setForm] = useState<FornInterface>({
    name: "",
    subjek: "",
    pesan: "",
  });
  const [state, handleSubmit] = useForm("mvgzbkwv");

  function validate() {
    if (form.pesan === "" || form.subjek === "") {
      return true;
    }
    return false;
  }

  function handleInputChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  useEffect(() => {
    if (state.succeeded) {
      document.querySelector("#formFeedBack")?.classList.add("active");
      toggleSetAlert("Thank");
    }
  }, [state.succeeded]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col ">
      <FloatingLabelInput
        type="text"
        name="subjek"
        value={form.subjek}
        label="Subjek"
        handleChange={handleInputChange}
      />

      <FloatingLabelTextarea
        name="pesan"
        value={form.pesan}
        label="Pesan"
        handleChange={handleInputChange}
      />

      <button
        disabled={validate()}
        type="submit"
        className="btn flex items-center justify-center gap-2 w-max "
      >
        <FiSend />
        KIRIM
      </button>
    </form>
  );
};

export default Form;
