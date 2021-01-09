import React from "react";
import "./Form-input.css";

export const FormInput = ({ label, ...props }) => {
  return (
    <>
      <div class="relative border-b-2 focus-within:border-blue-500">
        <input
          {...props}
          class="py-2 form-input block w-full appearance-none focus:outline-none bg-transparent text-blue-500"
          placeholder=" "
        />
        <label class="form-input__label absolute top-2 -z-1 duration-300 origin-0">
          {label}
        </label>
      </div>
    </>
  );
};

export default FormInput;
