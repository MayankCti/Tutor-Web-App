import React from "react";

const SelectDropdown = ({
  options,
  selectedValue,
  onChange,
  className,
  id,
}) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <select
        name=""
        className={
          className ?? "form-control py-2 ct_purple_bg  text-white ct_select_bg ct_fw_600"
        }
        id={id}
        value={selectedValue}
        onChange={handleChange}
      >
        {options?.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDropdown;
