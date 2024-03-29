import React from "react";
import { Field, ErrorMessage } from "formik";
function FeildComponent({ type, name, label }) {
  return (
    <div>
      {" "}
      <p className="text-rasasy font-semibold mt-4">{label}</p>
      <Field
        placeholder={`enter your ${name}`}
        className="w-4/5 h-10 rounded-2xl px-4 bg-rasasy bg-opacity-30  placeholder:text-white shadow-md mt-2  focus:bg-none focus:outline-none transition ease-in-out delay-150   duration-300  hover:scale-110 "
        type={type}
        name={name}
      />
      <div>
        <ErrorMessage name={name} />
      </div>
    </div>
  );
}

export default FeildComponent;
