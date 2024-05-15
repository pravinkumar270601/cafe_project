import * as React from "react";
import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { RiVipCrown2Fill } from "react-icons/ri";
import { BsFileBarGraphFill } from "react-icons/bs";
import Timesheet from "../../Pages/Timesheet/Timesheet";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import cafe_logo from "../../Assets/Image_1.jpg";
import Record from "../../Pages/Record/Record";
import { BiSolidFile } from "react-icons/bi";
import { RiSecurePaymentFill } from "react-icons/ri";
import Payroll from "../../Pages/Payroll/Payroll";

const drawerWidth = 240;

function SideNav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [currentComponent, setCurrentComponent] = React.useState(<Timesheet />);
  const [isClosing, setIsClosing] = React.useState(false);
  const [navBoeder, setNavBorde] = React.useState("");

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  React.useEffect(() => {
    setNavBorde("Timesheet");
  }, []);

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  // const handleDrawerToggle = () => {
  //   if (!isClosing) {
  //     setMobileOpen(!mobileOpen);
  //   }
  // };

  const handleNavigation = (component) => {
    setCurrentComponent(component);
    setMobileOpen(false); // Close the drawer on navigation
  };

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      {/* <Toolbar /> */}
      <div className="d-flex justify-content-center mt-4 mb-4 side-nav-img-div">
        <img
          src={cafe_logo}
          alt="logo"
          className="side-nav-img"
          style={{ width: "145", height: "100px" }}
        />
      </div>

      {/* <Divider /> */}
      <List>
        

        <ListItem
          disablePadding
          onClick={() => handleNavigation(<Timesheet />)}
        >
          <ListItemButton
            onClick={() => setNavBorde("Timesheet")}

            sx={{
              backgroundColor:
                navBoeder === "Timesheet" ? "var(--primary-color)" : "none",
              marginLeft: "10px",
              marginRight: "10px",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor:
                  navBoeder === "Timesheet" ? "var(--primary-color)" : "white", // Same as default background color
                // Add any other styles here that you want to disable on hover
              },
            }}
          >
            <ListItemIcon
            // sx={{
            //   color:
            //     navBoeder === "Timesheet" ? "var(--primary-color)" : "none",
            // }}
            >
              {/* <BsFileEarmarkBarGraph style={{ fontSize: "25px",color:"white",backgroundColor:"blue" }}  /> */}
              <BsFillFileEarmarkBarGraphFill
                style={{
                  fontSize: "25px",
                  color:
                    navBoeder === "Timesheet"
                      ? "white"
                      : "var(--primary-color)",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Timesheet"
              primaryTypographyProps={{
                // sx: {
                //   color:
                //     navBoeder === "Timesheet" ? "white" : "rgb(0, 0, 0, .3) ",
                //   fontWeight: "700",
                // },
                sx: {
                  color:
                    navBoeder === "Timesheet"
                      ? "white"
                      : "var(--primary-color)",
                },
              }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={() => handleNavigation(<Record />)}>
          <ListItemButton
            onClick={() => setNavBorde("Record")}
            sx={{
              backgroundColor:
                navBoeder === "Record" ? "var(--primary-color)" : "none",

              marginTop: "20px",
              marginLeft: "10px",
              marginRight: "10px",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor:
                  navBoeder === "Record" ? "var(--primary-color)" : "white", // Same as default background color
                // Add any other styles here that you want to disable on hover
              },
            }}
          >
            <ListItemIcon>
              <BiSolidFile
                style={{
                  fontSize: "28px",
                  color:
                    navBoeder === "Record" ? "white" : "var(--primary-color)",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Record"
              primaryTypographyProps={{
                sx: {
                  color:
                    navBoeder === "Record" ? "white" : "var(--primary-color)",
                },
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => handleNavigation(<Payroll/>)}>
          <ListItemButton
            onClick={() => setNavBorde("Payroll")}
            sx={{
              backgroundColor:
                navBoeder === "Payroll" ? "var(--primary-color)" : "none",

              marginTop: "20px",
              marginLeft: "10px",
              marginRight: "10px",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor:
                  navBoeder === "Payroll" ? "var(--primary-color)" : "white", // Same as default background color
                // Add any other styles here that you want to disable on hover
              },
            }}
          >
            <ListItemIcon>
              <RiSecurePaymentFill
                style={{
                  fontSize: "28px",
                  color:
                    navBoeder === "Payroll" ? "white" : "var(--primary-color)",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Payroll"
              primaryTypographyProps={{
                sx: {
                  color:
                    navBoeder === "Payroll" ? "white" : "var(--primary-color)",
                },
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="sidenav-div">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            width: "100%",
            // minHeight: "100vh",
            // maxHeight: "100%",
            height: "100%",
            padding: "0px",
            backgroundColor: "var(--page-bg-color)",
          }}
        >
          {currentComponent}
        </Box>
      </Box>
    </div>
  );
}

SideNav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default SideNav;
