import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import userIcon from "../../Assets/user.png";
import { FaBell } from "react-icons/fa";
import ListOfLog from "../RecordTabs/ListOfLog/ListOfLog";
import HoursRecord from "../RecordTabs/HoursRecord/HoursRecord";
import "../Css/record.css"
import EmployeesEntry from "../TimesheetTabs/EmployeesEntry/EmployeesEntry";
import EntryManagement from "../TimesheetTabs/EntryManagement/EntryManagement";
import '../Css/timesheet.css'

// import "../Pages/Css/Masters.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ height: "100%" }} // Set height to 100%
      {...other}
    >
      {value === index && <div style={{ height: "100%" }}>{children}</div>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(name) {
  return {
    id: `simple-tab-${name}`,
    "aria-controls": `simple-tabpanel-${name}`,
  };
}

const Timesheets = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="record-main-page">
      <Box
        sx={{
          width: " 100%",
          minHeight: "100vh",
          maxHeight: "100%",
          background: `var(--page-bg-color)`,
        }}
      >
        <Box sx={{ borderColor: "divider", height: "16%" }}>
          <Grid container md={12} sx={{ height: "55%" }}>
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
                <h1>Timesheets</h1>
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
          </Grid>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              height: "45%",
            }}
          >
            <Tab
              label="Employees Entry"
              {...a11yProps("Employees_Entry")}
              sx={{
                marginLeft: "30px",
                marginRight: "150px",
                textTransform: "none",
              }}
            />
            <Tab
              label="Entry Management"
              {...a11yProps("Entry_Management")}
              sx={{ marginRight: "150px", textTransform: "none" }}
            />
            {/* <Tab
              label="Category"
              {...a11yProps("Category")}
              sx={{ marginRight: "50px", textTransform: "none" }}
            /> */}

            {/* <Tab
              label="Subcategory"
              {...a11yProps("Subcategory")}
              sx={{ marginRight: "50px", textTransform: "none" }}
            /> */}
            {/* <Tab
              label="Crew"
              {...a11yProps("Crew")}
              sx={{ textTransform: "none" }}
            /> */}
          </Tabs>
        </Box>
        <Box sx={{ width: " 100%", height: "82%" }}>
          <CustomTabPanel value={value} index={0}>
            <EmployeesEntry/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <EntryManagement/>
          </CustomTabPanel>
          {/* <CustomTabPanel value={value} index={2}>
            <CategoryTab />
          </CustomTabPanel> */}
          {/* <CustomTabPanel value={value} index={3}>
            <SubcategoryTab />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <CrewTab />
          </CustomTabPanel> */}
        </Box>
      </Box>
    </div>
  );
};

export default Timesheets;
