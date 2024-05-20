import React, { useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field, ErrorMessage, useFormikContext } from "formik";
import "./CustomDateInput.css";
import calSvgIcon from "../../Assets/Icons8_flat_calendar.svg";

const CustomDateInput = ({ label, name }) => {
  const { setFieldValue, values } = useFormikContext();

  const handleIconClick = () => {
    document.getElementById(name).click();
  };

  const handleStartDateClick = () => {
    // Set end date value to start date value when start date is clicked
    if (name === "date1" && !values.date1) {
      setFieldValue("date1", values.date);
    }
  };

  return (
    <div style={{ width: "85%" }} className="CustomDateInput-div">
      <label htmlFor={name} className="input-heading">
        {label}
      </label>
      <div style={{ position: "relative", width: "100%" }}>
        <Field name={name} style={{ width: "100%" }}>
          {({ field, form }) => (
            <DatePicker
              {...field}
              id={name} // Assign id to the date field
              selected={field.value}
              className="customdateinput-field"
              onChange={(date) => form.setFieldValue(field.name, date)}
              placeholderText={"Select date"}
              minDate={name === "date1" ? values.date : null} // Set minDate based on the name
              startDate={name === "date1" ? values.date : null} // Set initial value based on the name
              onClick={handleStartDateClick} // Handle click event on the start date picker
            />
          )}
        </Field>
        <img
          src={calSvgIcon}
          alt="date"
          style={{
            color: "blue",
            height:"20px",
            width:"18px",
            position: "absolute",
            fontSize: "21px",
            cursor: "pointer",
            right: "18px",
            top: "50%",
            transform: "translate(50%, -50%)",
          }}
          onClick={handleIconClick} // Handle click event on the calendar icon
        />
        
      </div>
      <ErrorMessage name={name} component="div" className="inputs-error-msg" />
    </div>
  );
};

export default CustomDateInput;
