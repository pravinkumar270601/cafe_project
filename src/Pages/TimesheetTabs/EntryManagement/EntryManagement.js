import React, { useState, useEffect, useRef } from "react";
import { Container, Grid } from "@mui/material";
// import "../Css/timesheet.css";
// import userIcon from "../../../Assets/user.png";
import CustomInput from "../../../Components/CustomInput/CustomInput";
import CustomDropdownMui from "../../../Components/CustomDropDown/CustomDropdown";
// import CustomDateInput from "../../../Components/CustomDate/CustomDateInput";
// import actions from "../../ReduxStore/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
// import { FaBell } from "react-icons/fa";
// import Button from "@mui/material/Button";
// import ButtonGroup from "@mui/material/ButtonGroup";
// import { RiLogoutBoxRLine } from "react-icons/ri";
// import { RiLogoutBoxLine } from "react-icons/ri";
import CusTable from "../../../Components/CustomTable/CusTable";
import * as MASTER from "../../../Components/CustomTable/Tableentries";
// import CustomInputDisable from "../../Components/CustomInputDisable/CustomInputDisable";
// import "./Timesheet";
import CustomInputDisable from "../../../Components/CustomInputDisable/CustomInputDisable";
import CustomDateInput from "../../../Components/CustomDate/CustomDateInput";

const EntryManagement = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Grid
        container
        md={12}
        style={{
          height: "100%",
        }}
      >
        {/* input field */}
        <Grid item md={12} sx={{ marginTop: "20px" }}>
          <Formik
            initialValues={{
              emp_id: "",
              employee_name: "",
            }}
            style={{ height: "100%" }}
            //   onSubmit={handleSubmit}
          >
            {({ isSubmitting, resetForm, setFieldValue }) => (
              <Form style={{ height: "100%" }} className="fomik-form">
                <Container
                  style={{
                    width: "98%",
                    backgroundColor: "white",
                    padding: "10px 40px 10px",
                    height: "100%",
                    borderRadius: "15px",
                  }}
                >
                  {/* heading Row */}
                  <Grid container sx={{ height: "100%" }}>
                    {/* First Row */}
                    <Grid
                      item
                      xs={4}
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        marginTop: "5px",
                      }}
                    >
                      <CustomDropdownMui
                        label="Branch"
                        name="Branch"
                        custPlaceholder="Select Branch"
                        //   setFieldValue={setFieldValue}
                        options={[
                          { value: "1", label: "Male" },
                          { value: "2", label: "Female" },
                          { value: "3", label: "Others" },
                        ]}
                        //   selectEmployeeIdfn={selectEmployeeIdfn}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "5px",
                      }}
                    >
                      <CustomDropdownMui
                        label="Employee Name"
                        name="Employee_Name"
                        custPlaceholder="Select Employee Name"
                        //   setFieldValue={setFieldValue}
                        options={[
                          { value: "1", label: "Male" },
                          { value: "2", label: "Female" },
                          { value: "3", label: "Others" },
                        ]}
                        //   selectEmployeeIdfn={selectEmployeeIdfn}
                      />
                    </Grid>

                    <Grid
                      item
                      xs={4}
                      sx={{
                        display: "flex",
                        justifyContent: "end",
                        marginTop: "5px",
                      }}
                    >
                      <CustomInputDisable label="Employee Id" name={" "} />
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        marginTop: "5px",
                      }}
                    >
                      <CustomDateInput label="Date" name="date" />
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "5px",
                      }}
                    >
                      <CustomInput
                        label="Check-In Time"
                        name="no_of_staffs"
                        inputType={"number"}

                        custPlaceholder=" "
                        
                      />
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      sx={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        marginTop: "5px",
                      }}
                    >
                      <CustomInput
                        label="Check-Out Time"
                        name="no_of_staffs"
                        inputType={"number"}
                        custPlaceholder=" "
                      />
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}></Grid>
                    <Grid
                      item
                      xs={4}
                      sx={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        marginTop: "15px",
                      }}
                    >
                      <button
                        type="submit"
                        //   disabled={isSubmitting}
                        // onClick={() => setDefaultFieldValues(setFieldValue)}
                        className="expense-submit-btn"
                      >
                        Submit
                      </button>

                      <button
                        type="button"
                        onClick={() => {}}
                        className="expense-cancel-btn"
                        style={{ border: "1px solid var(--primary-color)" }}
                      >
                        Cancel
                      </button>
                    </Grid>
                  </Grid>
                </Container>
              </Form>
            )}
          </Formik>
        </Grid>
        <Grid item md={12} sx={{}}>
          <Container
            style={{
              width: "98%",
              padding: "0px",
              marginTop: "15px",
              marginBottom: "15px",
              background: "white",
              borderRadius: "10px",
              //   boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <Grid container>
              <Grid item xs={12}>
                <CusTable
                  TableHeading={MASTER.EntryManagementTableHeaders}
                  Tabledata={MASTER.EntryManagementTableValues}
                  TableTittle="Overview"
                  showEmpDetails={false}
                  showAction={true}

                  // handleDeleteIdChange={handleDeleteIdChange}
                />
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
      {/* {showToast && (
        <Toast message={toastMessage} backColor={backColor}/>
      )} */}
    </div>
  );
};

export default EntryManagement;
