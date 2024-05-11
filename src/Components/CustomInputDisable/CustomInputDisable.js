import React from "react";

import { Field, ErrorMessage } from "formik";

const CustomInputDisable = ({ label, name, value, ...rest }) => {
  return (
    <div style={{ width: "85%" }}>
      <div style={{ width: "100%" }}>
        <div>
          <label htmlFor={name} className="input-heading">
            {label}
          </label>
        </div>
        <Field
          id={name}
          name={name}
          type="text"
          value={name} // Pass the value from the parent component
          disabled // Set the input to be disabled
          {...rest}
          className="custominput-field"
        />
        <ErrorMessage
          name={name}
          component="div"
          className="inputs-error-msg"
        />
      </div>
    </div>
  );
};

export default CustomInputDisable;
