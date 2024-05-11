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
import cafe_logo from '../../Assets/Image_1.jpg'


const drawerWidth = 240;

function SideNav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [currentComponent, setCurrentComponent] = React.useState(<Timesheet/>);
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
        <img src={cafe_logo} alt="logo" className="side-nav-img" style={{width:"145",height:"100px"}} />
      </div>

      {/* <Divider /> */}
      <List>
        {/* <ListItem
          disablePadding
          onClick={() => handleNavigation(<>Dashboard</>)}
        >
          <ListItemButton
            onClick={() => setNavBorde("Dashboard")}
            sx={{
              borderRight:
                navBoeder === "Dashboard"
                  ? "4.9px solid var(--primary-color)"
                  : "none",
              borderRadius: "2px ",
            }}
          >
            <ListItemIcon
              sx={{
                color:
                  navBoeder === "Dashboard" ? "var(--primary-color)" : "none",
              }}
            >
              <RiVipCrown2Fill style={{ fontSize: "25px" }} />
            </ListItemIcon>
            <ListItemText
              primary="Dashboard"
              primaryTypographyProps={{
                sx: {
                  color:
                    navBoeder === "Dashboard" ? "black" : "rgb(0, 0, 0, .3) ",
                  fontWeight: "700",
                },
              }}
            />
          </ListItemButton>
        </ListItem> */}
        {/* <ListItem disablePadding onClick={() => handleNavigation(<>Master</>)}>
          <ListItemButton
            onClick={() => setNavBorde("Master")}
            sx={{
              borderRight:
                navBoeder === "Master"
                  ? "4.9px solid var(--primary-color)"
                  : "none",
              borderRadius: "2px ",
            }}
          >
            <ListItemIcon
              sx={{
                color: navBoeder === "Master" ? "var(--primary-color)" : "none",
              }}
              className="nav-icons"
            >
              <BsFillFileEarmarkTextFill style={{ fontSize: "25px" }} />
            </ListItemIcon>
            <ListItemText
              primary="Master"
              primaryTypographyProps={{
                sx: {
                  color: navBoeder === "Master" ? "black" : "rgb(0, 0, 0, .3) ",
                  fontWeight: "700",
                },
              }}
            />
          </ListItemButton>
        </ListItem> */}
        <ListItem
          disablePadding
          onClick={() => handleNavigation(<Timesheet/>)}
        >
          <ListItemButton
            onClick={() => setNavBorde("Timesheet")}
            // sx={{
            //   background:
            //     navBoeder === "Timesheet"
            //       ? "var(--primary-color)"
            //       : "none",
            //   borderRadius: "2px ",
            // }}
            sx={{backgroundColor:"var(--primary-color)",marginLeft:"10px",marginRight:"10px",borderRadius:"8px","&:hover": {
              backgroundColor: "var(--primary-color)", // Same as default background color
              // Add any other styles here that you want to disable on hover
          }}}
          >
            <ListItemIcon
              // sx={{
              //   color:
              //     navBoeder === "Timesheet" ? "var(--primary-color)" : "none",
              // }}  
            >
              {/* <BsFileEarmarkBarGraph style={{ fontSize: "25px",color:"white",backgroundColor:"blue" }}  /> */}
              <BsFillFileEarmarkBarGraphFill style={{ fontSize: "25px",color:"white" }} />
            </ListItemIcon>
            <ListItemText
              primary="Timesheet"
              primaryTypographyProps={{
                // sx: {
                //   color:
                //     navBoeder === "Timesheet" ? "white" : "rgb(0, 0, 0, .3) ",
                //   fontWeight: "700",
                // },
                sx:{
                  color:"white"
                }
              }}
            />
          </ListItemButton>
        </ListItem>
        {/* <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BsFileBarGraphFill style={{ fontSize: "25px" }} />
            </ListItemIcon>
            <ListItemText
              primary="Report"
              primaryTypographyProps={{
                sx: {
                  color: navBoeder === "Report" ? "black" : "rgb(0, 0, 0, .3) ",
                  fontWeight: "700",
                },
              }}
            />
          </ListItemButton>
        </ListItem> */}
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
            minHeight: "100vh",
            maxHeight: "100%",
            padding: "0px",
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
