import React, { useState, useEffect, useRef } from "react";
import { Container, Grid } from "@mui/material";
import actions from "../../../ReduxStore/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";
import CustomSearchInput from "../../../Components/CustomSearchInput/CustomSearchInput";
import CustomInputDisable from "../../../Components/CustomInputDisable/CustomInputDisable";
import CusTable from "../../../Components/CustomTable/CusTable";
import * as MASTER from "../../../Components/CustomTable/Tableentries";
import axios from "axios";

const EmployeesEntry = () => {
  const dispatch = useDispatch();
  const [apiUpdateId, setapiUpdateId] = useState(null);

  const { TimeSheetCreate } = useSelector((state) => state?.TimeSheetCreate);
  console.log(TimeSheetCreate, "TimeSheetCreate");

  const { TimeSheetUpdate } = useSelector((state) => state?.TimeSheetUpdate);
  console.log(TimeSheetUpdate, "TimeSheetUpdate");

  const { TimeSheetGetById } = useSelector((state) => state?.TimeSheetGetById);
  console.log(TimeSheetGetById, "TimeSheetGetById");

  const { TimeSheetDropdown } = useSelector(
    (state) => state?.TimeSheetDropdown
  );
  // console.log(TimeSheetDropdown,"TimeSheetDropdown");

  const [button1Disabled, setButton1Disabled] = useState(false);
  const [button2Disabled, setButton2Disabled] = useState(false);

  const [employeeName, setEmployeeName] = useState(" ");
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Handle form submission
    console.log(values);
    // const EmployeeId = values.emp_id.value
    if (!button1Disabled) {
      console.log("check in ");
      const data1 = {
        data: { ...values, emp_id: values.emp_id.value },
        method: "post",
        apiName: "createEmployee",
      };

      dispatch(actions.TIMESHEETCREATE(data1));
      setButton1Disabled(true);
      setButton2Disabled(true);
      setEmployeeName(' ')
    }

    //   if (MovieCreate?.data) {
    //     triggerToast("Successfully Created!");
    //     setBackColor("green");
    //   }else {
    //     triggerToast("failed");
    //     setBackColor("red")
    //   }
    // }

    // updating fuction for data

    if (!button2Disabled) {
      console.log("check out ");
      console.log(apiUpdateId, "update ");

      const data2 = {
        data: {},
        method: "put",
        apiName: `updateEmployee/${apiUpdateId}`,
      };

      dispatch(actions.TIMESHEETUPDATE(data2));
      setButton1Disabled(true);
      setButton2Disabled(true);
      setEmployeeName(' ')
    }

    //   setchangebtn(true);
    //   if (MovieUpdate?.data) {
    //     triggerToast("Successfully Updated");
    //     setBackColor("green")
    //   } else {
    //     triggerToast("failed");
    //     setBackColor("red")
    //   }

    // Reset the form
    resetForm();
    setSubmitting(false);
  };

  useEffect(() => {
    // Set CheckIn as default when component mounts
    setButton1Disabled(true);
    setButton2Disabled(true);
  }, []);



  const selectEmployeeIdfn = async (name, id) => {
    console.log(name, "selectmovieIdfn");
    console.log(id.value, "selectmovieIdfn");

    // login logout checker api

    const data = {
      data: {},
      method: "get",
      apiName: `logValidation/${id.value}`,
    };
    dispatch(actions.TIMESHEETGETBYID(data));

    // emp id showing logic
    const getemp_name = TimeSheetDropdown?.data?.filter(
      (data) => data.id == id.value
    );
    setEmployeeName(getemp_name[0].name);

    try {
      const response = await axios.get(
        `http://122.165.52.124:8080/api/v1/logValidation/${id.value}`
      );
      const CheckingButtonShow = await response.data;
      console.log(CheckingButtonShow.data, "CheckingButtonShow"); // Assuming your API returns movie data
      setapiUpdateId(CheckingButtonShow.data.log_id);
      const btnData = CheckingButtonShow.data.log_id;
      console.log(btnData, "btnData");
      if (btnData) {
        console.log("check out btn show");
        setButton1Disabled(true);
        setButton2Disabled(false);
      } else {
        console.log("check in btn show");
        setButton1Disabled(false);
        setButton2Disabled(true);
      }
    } catch (error) {
      console.error("Error fetching logValidation :", error);
      // Handle error
    }
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
    <div style={{ height: "100%", width: "100%" }}>
      <Grid
        container
        md={12}
        style={{
          height: "100%",
        }}
      >
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
                      <CustomSearchInput
                        label="Employee Id"
                        name="emp_id"
                        custPlaceholder="Search Employee Id"
                        setFieldValue={setFieldValue}
                        selectEmployeeIdfn={selectEmployeeIdfn}
                        options={timeSheetDrop}
                        setEmployeeName={setEmployeeName}
                        setButton1Disabled={setButton1Disabled}
                        setButton2Disabled={setButton2Disabled}
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
                        marginTop: "2.3%",
                        // alignItems: "center",
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
                            filter: button1Disabled ? "blur(1px)" : "none",
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
                            filter: button2Disabled ? "blur(1px)" : "none",
                          }}
                        >
                          Check-Out
                        </Button>
                      </ButtonGroup>
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
                  TableHeading={MASTER.CreateEmployeeTableHeaders}
                  Tabledata={rowTableData2}
                  TableTittle="Overview"
                  showEmpDetails={false}
                  showActions={false}
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

export default EmployeesEntry;
