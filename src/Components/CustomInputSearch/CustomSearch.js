import React from 'react';
import { Field, ErrorMessage } from 'formik';

const CustomSearchInput = ({ label, name, predefinedSuggestions, ...rest }) => {
  return (
    <div style={{ width: "100%" }}>
      <div>
        <label htmlFor={name} className="input-heading">
          {label}
        </label>
      </div>
      <Field name={name}>
        {() => (
          <div>
            <input
              {...rest}
              type="text"
              name={name} // Using the name prop directly
              placeholder="Search..."
              style={{ color: 'black', width: '200px', height: '35px', borderRadius: '10px', border: "1px solid grey" }}
              onChange={(e) => {
                // Custom logic if needed
              }}
            />
            <ErrorMessage name={name} component="div" />
          </div>
        )}
      </Field>
      <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
        {predefinedSuggestions.map((result) => (
          <div key={result.value} >
            {result.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSearchInput;
