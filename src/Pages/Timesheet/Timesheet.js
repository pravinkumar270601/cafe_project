import React, { useState, useEffect, useRef } from "react";
import { Container, Grid } from "@mui/material";
import "../Css/timesheet.css";
import userIcon from "../../Assets/user.png";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomDropdownMui from "../../Components/CustomDropDown/CustomDropdown";
import actions from "../../ReduxStore/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import { FaBell } from "react-icons/fa";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";
import CusTable from "../../Components/CustomTable/CusTable";
import * as MASTER from "../../Components/CustomTable/Tableentries";
import CustomInputDisable from "../../Components/CustomInputDisable/CustomInputDisable";

// import * as Yup from "yup";
// import axios from "axios";
// import Toast from "../Components/Toast/Toaste";

const Timesheet = () => {
  const dispatch = useDispatch();

  // const { TimeSheetCreate } = useSelector((state) => state?.TimeSheetCreate);
  // const { TimeSheetUpdate } = useSelector((state) => state?.TimeSheetUpdate);
  const { TimeSheetDropdown } = useSelector((state) => state?.TimeSheetDropdown);
  console.log(TimeSheetDropdown,"TimeSheetDropdown");


  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Handle form submission
    console.log(values);
    // if (true) {
    const data1 = {
      data: { ...values },
      method: "post",
      apiName: "",
    };

    // dispatch(actions.TIMESHEETCREATE(data1));


    //   if (MovieCreate?.data) {
    //     triggerToast("Successfully Created!");
    //     setBackColor("green");
    //   }else {
    //     triggerToast("failed");
    //     setBackColor("red")
    //   }
    // }

    // updating fuction for data

    // if (changebtn === false) {

      const data2 = {
        data: { ...values },
        method: "put",
        apiName: ``,
      };

      // dispatch(actions.TIMESHEETUPDATE(data2));



    //   setchangebtn(true);
    //   if (MovieUpdate?.data) {
    //     triggerToast("Successfully Updated");
    //     setBackColor("green")
    //   } else {
    //     triggerToast("failed");
    //     setBackColor("red")
    //   }

    // const data = { data: {}, method: "get", apiName: "getmovieDetails" };
    // dispatch(actions.MOVIESTABLEGETALL(data));
    // }

    // console.log("Dispatching MOVIESTABLEGETALL action:", data);

    // Reset the form
    resetForm();
    setSubmitting(false);
  };

  const [button1Disabled, setButton1Disabled] = useState(false);
  const [button2Disabled, setButton2Disabled] = useState(false);

  useEffect(() => {
    // Set CheckIn as default when component mounts
    setButton1Disabled(false);
    setButton2Disabled(false);
  }, []);

  const handleButton1Click = () => {
    setButton1Disabled(true);
    setButton2Disabled(false);
  };

  const handleButton2Click = () => {
    setButton1Disabled(false);
    setButton2Disabled(true);
  };

  const selectEmployeeIdfn = (name, id) => {
    console.log(name, "selectmovieIdfn");
    console.log(id, "selectmovieIdfn");

    const data1 = {
      data: { movie_id: id },
      method: "post",
      apiName: "dropdownCategory",
    };
    // console.log(data1);
    // dispatch(actions.CATEGORYDROPDOWN(data1));
  };


  useEffect(() => {
    const data = { data: {}, method: "get", apiName: "empDropDown" };
    dispatch(actions.TIMESHEETDROPDOWN(data));
  }, [dispatch]);



  // const [timeSheetDrop, setTimeSheetDrop] = useState([]);
  // useEffect(() => {
  //   const tempArr = [];
  //   TimeSheetDropdown?.data?.map((values, index) =>
  //     tempArr.push({
  //       value: values?.movie_id,
  //       label: values?.movie_name,
  //     })
  //   );
  //   setTimeSheetDrop(tempArr);
  // }, [TimeSheetDropdown]);


  return (
    <div
      className="Timesheet-div"
      style={{ background: "black", height: "100%" }}
    >
      <Grid container md={12} sx={{ background: "white", height: "100%" }}>
        <Grid
          item
          md={12}
          sx={{
            height: "10%",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "var(--primary-color)",
          }}
        >
          <div className="pages-h1">
            <h1>Timesheet</h1>
          </div>
          <div className="d-flex align-items-center ">
            <div>
              <FaBell className="user-bell" />
            </div>
            <div className="user-line"></div>
            <div className=" user-div d-flex ">
              <div className="user-img-div ">
                <img src={userIcon} alt="User" />
              </div>
              <div className="username">Mohan </div>
            </div>
          </div>
        </Grid>
        {/* input field */}
        <Grid item md={12} sx={{ height: "35%" }}>
          <Formik
            initialValues={{
              employee_id: "",
              employee_name: "",
            }}
            style={{ height: "100%" }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, resetForm, setFieldValue }) => (
              <Form style={{ height: "100%" }} className="fomik-form">
                <Container
                  style={{
                    width: "100%",
                    backgroundColor: "white",
                    padding: "0px 40px 10px",
                    height: "100%",
                  }}
                >
                  {/* heading Row */}
                  <Grid container sx={{ height: "100%" }}>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        height: "30%",
                        background: "white",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <h4> Employee Entry </h4>
                        <div className="heading-line"></div>
                      </div>
                    </Grid>

                    {/* First Row */}
                    <Grid
                      item
                      xs={4}
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        marginTop: "5px",
                        height: "70%",
                      }}
                    >
                      <CustomDropdownMui
                        label="Employee Id"
                        name="employee_id"
                        custPlaceholder="Select Employee Id"
                        setFieldValue={setFieldValue}
                        options={[
                          { value: "1", label: "pravin" },
                          { value: "2", label: "pravin" },
                        ]}
                        selectEmployeeIdfn={selectEmployeeIdfn}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "5px",
                        height: "70%",
                      }}
                    >
                      {/* <CustomInput
                        label="Employee Name"
                        name="employee_name"
                        inputType={"text"}
                        custPlaceholder=" "
                      /> */}
                      <CustomInputDisable
                      label="Employee Name"
                      name={'pravin'}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      sx={{
                        display: "flex",
                        justifyContent: "end",
                        marginTop: "20px",
                        height: "70%",
                      }}
                    >
                      <ButtonGroup>
                        <Button
                          disabled={button1Disabled}
                          // onClick={handleButton1Click}
                          type="submit"
                          startIcon={<RiLogoutBoxRLine className="in-out" />}
                          style={{
                            margin: "5px",
                            width: "130px",
                            background: button1Disabled ? "#cccccc" : "#07AC0C",
                            borderRadius: "8px",
                            height: "37px",
                            textTransform: "none",
                            fontSize: "13px",
                            color: "white",
                            filter: button1Disabled ? "blur(2px)" : "none",
                          }}
                        >
                          Check-In
                        </Button>
                        <Button
                          disabled={button2Disabled}
                          type="submit"
                          // onClick={handleButton2Click}
                          startIcon={<RiLogoutBoxLine className="in-out" />}
                          style={{
                            margin: "5px",
                            width: "130px",
                            background: button2Disabled ? "#cccccc" : "red",
                            borderRadius: "8px",
                            color: "white",
                            height: "37px",
                            textTransform: "none",
                            fontSize: "13px",
                            cursor: button2Disabled ? "none" : "pointer",
                            filter: button2Disabled ? "blur(2px)" : "none",
                          }}
                        >
                          Check-Out
                        </Button>
                      </ButtonGroup>
                    </Grid>
                    {/* {fourth Row} */}
                  </Grid>
                </Container>
              </Form>
            )}
          </Formik>
        </Grid>

        <Grid item md={12} sx={{ height: "55%" }}>
          <Container
            style={{
              width: "95%",
              padding: "0px",
              marginTop: "15px",
              maxWidth: "95%",
              background: "white",
              borderRadius: "10px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <Grid container>
              <Grid item xs={12}>
                <CusTable
                  TableHeading={MASTER.CreateEmployeeTableHeaders}
                  Tabledata={MASTER.CreateEmployeeTableValues}
                  TableTittle="Overview"
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

export default Timesheet;
