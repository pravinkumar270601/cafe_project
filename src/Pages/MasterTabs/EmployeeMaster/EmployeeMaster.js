import { Container, Grid } from "@mui/material";
import React from "react";
// import "../Css/timesheet.css";

import CustomDateInput from "../../../Components/CustomDate/CustomDateInput";
import CustomDropdownMui from "../../../Components/CustomDropDown/CustomDropdown";
import CustomInput from "../../../Components/CustomInput/CustomInput";
import CustomPhoneNumber from "../../../Components/CustomPhoneNb/CustomPhoneNumber";
// import actions from "../../ReduxStore/actions/index";
import { Email, Password } from "@mui/icons-material";
import { Form, Formik } from "formik";
import CusTable from "../../../Components/CustomTable/CusTable";
import * as MASTER from "../../../Components/CustomTable/Tableentries";
// import ModelOpen from "../../Components/ModelOpen/ModelOpen";
// import CustomInputDisable from "../../Components/CustomInputDisable/CustomInputDisable";
// import "./Timesheet";

const EmployeeMaster = () => {
  // const [modalOpen, setModalOpen] = useState(false);

  // const handleViewClick = (data) => {
  //   // Open the modal here
  //   setModalOpen(true);
  // };
  // const [open, setOpen] = React.useState(false);
 
  // const handleClose = () => setOpen(false);

  // React.useEffect(() => {
  //   handleOpen();
  // }, [ModelOpen]);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  return (
    <div style={{height: "100%", width: "100%" }}>
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
                      <CustomDropdownMui
                        label="Branch"
                        name="Branch_Dropdown"
                        custPlaceholder="Select Branch"
                        //   setFieldValue={setFieldValue}
                        options={[
                          // {value:"0",label:""},
                          { value: "1", label: "Mohan&Co" },
                          { value: "2", label: "Empty Cafe" },
                          { value: "3", label: "Tea Boy" },
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
                        // height: "30%",
                      }}
                    >
                      <CustomInput
                        label="Employee Name"
                        name="Employee_Name"
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
                        // height: "30%",
                      }}
                    >
                      <CustomInput
                        label="Employee Id"
                        name="Employee_Id"
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
                        // height: "30%",
                      }}
                    >
                      <CustomDropdownMui
                        label="Designation"
                        name="Designation"
                        custPlaceholder="Select Designation"
                        //   setFieldValue={setFieldValue}
                        options={[
                          // {value:"0",label:""},
                          { value: "1", label: "Cashier" },
                          { value: "2", label: "Worker" },
                          { value: "3", label: "Helper" },
                        ]}/>
                        
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
                        label="Email"
                        name="email"
                       inputType={Email}
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
                      <CustomInput label="Password" name="password" 
                      inputType={Password}
                      custPlaceholder=" "/>
                    </Grid>
                    
                    <Grid
                      item
                      xs={4}
                      sx={{
                        display: "flex",
                        justifyContent: "Start",
                        marginTop: "5px",
                        // height: "30%",
                      }}
                    >
                      <CustomPhoneNumber
                        label="Mobile Number"
                        name="phoneNumber"
                      
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
                      <CustomDateInput
                        label="DOJ"
                        name="Joining_Date"
                        
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
                      <CustomDateInput
                        label="DOB"
                        name="Birth_Date"
                        
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
                        label="Adhaar Number"
                        name="Number"
                        inputType={"number"}
                        custPlaceholder=" "
                      />
                    </Grid>
                    <Grid>
                      
                    </Grid>
                    <Grid item      xs={4}
                     
                    >
                      
                      
                    </Grid>

                    <Grid item xs={4}
                     
                     sx={{
                       display: "flex",
                       justifyContent: "end",
                       alignItems: "end",
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
                     </button></Grid>
                    <Grid item xs={4}></Grid>
                    <Grid>
                      
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
                  TableHeading={MASTER.EmployeeMasterTableHeaders}
                  Tabledata={MASTER.EmployeeMasterTableValues}
                  TableTittle="Overview"
                  // showEmpDetails={true}
                  showAction={true}
                  showSearch={true}
                  // onViewClick={handleViewClick}

                  // handleDeleteIdChange={handleDeleteIdChange}
                />
                {/* {modalOpen && <ModelOpen open={open} handleClose={handleClose} handleOpen={handleOpen}/>} */}
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

export default EmployeeMaster;