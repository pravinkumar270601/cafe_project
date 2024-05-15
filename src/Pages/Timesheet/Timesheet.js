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
import "./Timesheet";
import CustomSearchInput from "../../Components/CustomInputSearch/CustomSearch";

// import * as Yup from "yup";
// import axios from "axios";
// import Toast from "../Components/Toast/Toaste";

const Timesheet = () => {
  const dispatch = useDispatch();
  const [apiUpdateId, setapiUpdateId] = useState(null);

  const { TimeSheetCreate } = useSelector((state) => state?.TimeSheetCreate);
  console.log(TimeSheetCreate, "TimeSheetCreate");

  const { TimeSheetUpdate } = useSelector((state) => state?.TimeSheetUpdate);
  console.log(TimeSheetUpdate, "TimeSheetUpdate");

  const { TimeSheetDropdown } = useSelector(
    (state) => state?.TimeSheetDropdown
  );
  // console.log(TimeSheetDropdown,"TimeSheetDropdown");

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Handle form submission
    console.log(values);
    // if (true) {
    // const data1 = {
    //   data: { ...values },
    //   method: "post",
    //   apiName: "createEmployee",
    // };

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
    // console.log(apiUpdateId,"update ")

    const data2 = {
      data: {},
      method: "put",
      apiName: `updateEmployee/${apiUpdateId}`,
    };

    dispatch(actions.TIMESHEETUPDATE(data2));

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

  const [employeeName, setEmployeeName] = useState(" ");
  const selectEmployeeIdfn = (name, id) => {
    console.log(name, "selectmovieIdfn");
    console.log(id, "selectmovieIdfn");
    setapiUpdateId(id);

    const getemp_name = TimeSheetDropdown?.data?.filter(
      (data) => data.id == id
    );
    setEmployeeName(getemp_name[0].name);

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

  const [timeSheetDrop, setTimeSheetDrop] = useState([]);
  useEffect(() => {
    const tempArr = [];
    TimeSheetDropdown?.data?.map((values, index) =>
      tempArr.push({
        value: values?.id,
        label: values?.emp_unique_id,
      })
    );
    setTimeSheetDrop(tempArr);
  }, [TimeSheetDropdown]);

  console.log(employeeName, "employeeName");
  const { TimeSheetGetAll } = useSelector((state) => state?.TimeSheetGetAll);
  // console.log(MoviesTableGetAll, "lllllllll");
  useEffect(() => {
    const data = { data: {}, method: "get", apiName: "getall" };
    // console.log("Dispatching MOVIESTABLEGETALL action:", data);
    dispatch(actions.TIMESHEETGETALL(data));
    // console.log(data, "MOVIESTABLEGETALL.................");
  }, [dispatch, TimeSheetUpdate, TimeSheetCreate]);

  const [rowTableData2, setRowTableData2] = useState([
    {
      Sno: "1",
      EmployeeId: "---",
      EmployeeName: "---",
      Check_In_Date: "---",
      Check_In_Time: "---",
      Check_Out_Date: "---",
      Check_Out_Time: "---",
      Status: "---",
    },
  ]);

  useEffect(() => {
    const tempArr = [];
    TimeSheetGetAll?.data?.map((data, index) => {
      // const currentDate = new Date();
      // const formattedDate = `${currentDate.getDate()} ${getMonthName(
      //   currentDate.getMonth()
      // )} ${currentDate.getFullYear()}`;
      return tempArr.push({
        id: data?.emp_id,
        Sno: index + 1,
        EmployeeId: data.emp_unique_id,
        EmployeeName: data.emp_name,
        Check_In_Date: data.check_in_date,
        Check_In_Time: data.check_in_time,
        Check_Out_Date: data.check_out_date || "--------",
        Check_Out_Time: data.check_out_time || "--------",
        Status: data.check_status,
      });
    });
    setRowTableData2(tempArr);
  }, [TimeSheetGetAll]);

  return (
    <div
      className="Timesheet-div"
      style={{
        minHeight: "100vh",
        maxHeight: "100%",
        // height:"100%",
        width: "100%",
        // background: "blue",
      }}
    >
      <Grid
        container
        md={12}
        sx={{
          width: "100%",
        }}
      >
        <Grid
          item
          md={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "var(--primary-color)",
          }}
        >
          <div className="pages-h1 d-flex align-items-center">
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
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            // background: "white",
          }}
        >
          <div className="heading-line-div">
            <div className="head-line-div">
              <h4> Employee Entry </h4>
              <div className="heading-line"></div>
            </div>
            {/* <div className="head-line-div">
              <h4> Employee Entry </h4>
              <div className="heading-line"></div>
            </div> */}
          </div>
        </Grid>
        {/* input field */}
        <Grid item md={12} sx={{ height: "170px", marginTop: "20px" }}>
          <Formik
            initialValues={{
              emp_id: "",
              employee_name: "",
            }}
            style={{ height: "100%" }}
            onSubmit={handleSubmit}
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
                        label="Employee Id"
                        name="emp_id"
                        custPlaceholder="Select Employee Id"
                        setFieldValue={setFieldValue}
                        options={timeSheetDrop}
                        selectEmployeeIdfn={selectEmployeeIdfn}
                      />
                      {/* <CustomSearchInput
                        predefinedSuggestions={[
                          { value: 1, label: "Apple" },
                          { value: 2, label: "Banana" },
                          { value: 3, label: "Orange" },
                          { value: 4, label: "Pineapple" },
                          { value: 5, label: "Grapes" },
                        ]}
                      /> */}
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
                      {/* <CustomInput
                        label="Employee Name"
                        name="employee_name"
                        inputType={"text"}
                        custPlaceholder=" "
                      /> */}
                      <CustomInputDisable
                        label="Employee Name"
                        name={employeeName}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      sx={{
                        display: "flex",
                        justifyContent: "end",
                        marginTop: "20px",
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

        <Grid item md={12} sx={{}}>
          <Container
            style={{
              width: "98%",
              padding: "0px",
              marginTop: "15px",
              marginBottom: "15px",
              background: "white",
              borderRadius: "10px",
              // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <Grid container>
              <Grid item xs={12}>
                <CusTable
                  TableHeading={MASTER.CreateEmployeeTableHeaders}
                  Tabledata={rowTableData2}
                  TableTittle="Overview"
                  showEmpDetails={false}
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
