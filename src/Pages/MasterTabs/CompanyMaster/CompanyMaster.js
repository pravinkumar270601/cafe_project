import { Container, Grid } from "@mui/material";
import React from "react";
// import "../Css/timesheet.css";

import CustomInput from "../../../Components/CustomInput/CustomInput";
import CustomPhoneNumber from "../../../Components/CustomPhoneNb/CustomPhoneNumber";
// import actions from "../../ReduxStore/actions/index";
import { Form, Formik } from "formik";
import * as MASTER from "../../../Components/CustomTable/Tableentries";
import Table from "../../../Components/CustomTable/CusTable";
// import CustomInputDisable from "../../Components/CustomInputDisable/CustomInputDisable";
// import "./Timesheet";

const CompanyMaster = () => {
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
                    padding: "0px 40px 10px",
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
                      

                      <CustomInput
                        label="Company Name"
                        name="Company_name"
                        inputType={"text"}
                        custPlaceholder=" "
                      />
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "5px",
                        // height: "30%",
                      }}
                    >
                      <CustomInput
                        label="Company Registration Number"
                        name="Company_Registration_Number"
                        inputType={"Number"}
                        custPlaceholder=" "
                      />
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      sx={{
                        display: "flex",
                        justifyContent: "end",
                        marginTop: "5px",
                        // height: "30%",
                      }}
                    >
                      <CustomInput
                        label="Company Email"
                        name="Company_email"
                        inputType={"email"}
                        custPlaceholder=" "
                      />
                    </Grid>

                    <Grid
                      item
                      xs={4}
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        marginTop: "5px",
                        // height: "30%",
                      }}
                    >
                      <CustomInput
                        label="Contact Person Name"
                        name="Contact_Person_Name"
                        inputType={"text"}
                        custPlaceholder=" "
                      />
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "5px",
                        // height: "30%",
                      }}
                    >
                      <CustomPhoneNumber
                        label="Contact Person Number"
                        name="phoneNumber"
                      />
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      sx={{
                        display: "flex",
                        justifyContent: "end",
                        marginTop: "5px",
                        // height: "30%",
                      }}
                    >
                      <CustomInput
                        label="Contact Person Email"
                        name="Contact_Person_Email"
                        inputType={"email"}
                        custPlaceholder=" "
                      />
                    </Grid>

                    <Grid
                      item
                      xs={4}
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        marginTop: "5px",
                      }}
                    >
                      <CustomInput
                        label="Street"
                        name="street"
                        inputType={"text"}
                        custPlaceholder=" "
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
                      <CustomInput
                        label="City"
                        name="city"
                        inputType={"text"}
                        custPlaceholder=" "
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
                      <CustomInput
                        label="State"
                        name="state"
                        inputType={"text"}
                        custPlaceholder=" "
                      />
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        marginTop: "5px",
                      }}
                    >
                      <CustomInput
                        label="Country"
                        name="country"
                        inputType={"text"}
                        custPlaceholder=" "
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
                      <CustomInput
                        label="Pincode"
                        name="pincode"
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
                        marginTop: "5px",
                      }}
                    >
                      <CustomPhoneNumber
                        label="Landline Number"
                        name="landlinenumber"
                      />
                    </Grid>

                    <Grid item xs={4}sx={{
                        display: "flex",
                        justifyContent: "start",
                        marginTop: "5px",
                      }}
                    >
                      <CustomInput
                        label="Language"
                        name="language"
                        inputType={"text"}
                        custPlaceholder=" "
                      />
                        
                    </Grid>
                    <Grid item xs={4}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "5px",
                      }}
                    >
                      <CustomInput
                        label="Currency"
                        name="currency"
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
                <Table
                  TableHeading={MASTER.CompanyMasterTableHeaders}
                  Tabledata={MASTER.CompanyMasterTableValues}
                  TableTittle="Overview"
                  // showEmpDetails={true}
                  showAction={true}
                  showSearch={true}
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

export default CompanyMaster;