import React from 'react';

const MonthInput = ({ id, label, value, onChange, ...props }) => {
  return (
    <form className="form-floating">
      <input
        type="month"
        className="form-control"
        id={id}
        value={value}
        onChange={onChange}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </form>
  );
};

export default MonthInput;
