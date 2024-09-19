import React from "react";

const FormInput = ({
  id,
  type = "text",
  className = "",
  onChange,
  onBlur,
  value,
  ...rest
}) => {
  return (
    <input
      id={id}
      type={type}
      className={`ct_input form-control ct_input_40 ${className}`}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      {...rest}
      
    />
  );
};

export default FormInput;
