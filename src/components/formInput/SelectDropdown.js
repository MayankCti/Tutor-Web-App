import React from "react";

const SelectDropdown = ({
  defaultOptions = null,
  options = [],
  selectedValue = "",
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
        name={id || "id"}
        className={
          className
            ? className
            : "form-control py-2 ct_purple_bg text-white ct_select_bg ct_fw_600 cursorPointer"
        }
        id={id}
        value={selectedValue}
        onChange={handleChange}
      >
        {defaultOptions && (
          <option value="" disabled>
            {defaultOptions}
          </option>
        )}
        {options.map(
          (option, index) =>
            option.value !== null && (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            )
        )}
      </select>
    </div>
  );
};

export default SelectDropdown;
