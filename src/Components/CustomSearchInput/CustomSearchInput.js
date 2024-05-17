import React, { useState } from "react";
import { ErrorMessage, Field } from "formik";
import Select from "react-select";
import "../ComponentsCss/componet.css";


// .css-1h06qz8-control  

const CustomSearchInput = ({ label, name, options, setFieldValue,selectEmployeeIdfn,custPlaceholder,setEmployeeName,setButton1Disabled,setButton2Disabled, ...rest }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: '1px solid #ced4da',
      borderRadius: '5px',
      boxShadow: state.isFocused ? 'none' : null, 
    }),
  };


  return (
    <div style={{ width: "85%" }}>
      <div style={{ width: "100%" }}>
        <div>
          <label htmlFor={name} className="input-heading">
            {label}
          </label>
        </div>
        <Field name={name} className='custominput-field'>
          {({ field }) => (
            <Select
              {...field}
              {...rest}
              options={options}
              classNamePrefix="custom-select"
              className="customInput-select"
              styles={customStyles}
              placeholder={custPlaceholder}
              isClearable={true}
              isSearchable
              menuIsOpen={inputValue.length > 0} // Show Select only when inputValue has length
              onInputChange={handleInputChange}
              filterOption={(option, inputValue) =>
                option.label.toLowerCase().includes(inputValue.toLowerCase())
              }
              onChange={(option) => {
                
                setInputValue('');
                setFieldValue(name, option);
                if(option){
                selectEmployeeIdfn(name,option)
                }
                if(!option){
                setEmployeeName(' ')
                setButton1Disabled(true)
                setButton2Disabled(true)
                }
              }}
              components={{
                DropdownIndicator: null,
              }}
             
            />
          )}
        </Field>
        <ErrorMessage name={name} component="div" className="inputs-error-msg" />
      </div>
    </div>
  );
};

export default CustomSearchInput;
