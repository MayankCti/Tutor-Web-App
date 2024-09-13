import React from "react";

const SelectDropdown = ({
  defaultOptions =" -- Select an option --",
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
<<<<<<< Updated upstream
          className ?? "form-control py-2 ct_purple_bg  text-white ct_select_bg"
=======
          className
            ? className
            : "form-control py-2 ct_purple_bg text-white ct_select_bg ct_fw_600"
>>>>>>> Stashed changes
        }
        id={id}
        value={selectedValue}
        onChange={handleChange}
      >
<<<<<<< Updated upstream
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
=======
        <option value="" disabled>
          {defaultOptions}
        </option>
        {options.map(
          (option, index) =>
            option.value !== null && (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            )
        )}
>>>>>>> Stashed changes
      </select>
    </div>
  );
};

export default SelectDropdown;
