import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import user from "../assests/user.png";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Logo from "../assests/Logo.png";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import DescriptionIcon from "@mui/icons-material/Description";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Button, Card, CardActions, CardContent } from "@mui/material";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import Progress from "../components/Progress";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const itemList = [
  { text: "Over view", icon: <HomeIcon />, key: "/home" },
  { text: "Leads", icon: <GroupIcon />, key: "/leads" },
  { text: "Case Study", icon: <AssignmentIcon />, key: "/casestudy" },
  { text: "Blogs", icon: <DescriptionIcon />, key: "/" },
  { text: "Users", icon: <PeopleAltIcon />, key: "/" },
];

const cardContents = [
  { title: "Total Leads", icon: <GroupIcon />, count: 100 },
  {
    title: "Total Downloads",
    icon: <DownloadForOfflineOutlinedIcon />,
    count: 40,
  },
  { title: "Total Blog Posts", icon: <DescriptionIcon />, count: 20 },
  { title: "Total Case Studies", icon: <AssignmentIcon />, count: 12 },
];

const servicesData = [
  { name: "UI/UX", value: 28 },
  { name: "Web App Development", value: 18 },
  { name: "Mobile App Development", value: 20 },
  { name: "Full Stack Engineering", value: 48 },
  { name: "Product Engineering", value: 48 },
  { name: "Share Point Services", value: 48 },
  { name: "Out Systems", value: 28 },
  { name: "E-Commerce Development", value: 18 },
  { name: "CMS Development", value: 20 },
  { name: "QA Services", value: 48 },
  { name: "DevOps", value: 48 },
  { name: "Digital Marketing", value: 48 },
];

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState("");
  const [logoutClicked, setLogoutClicked] = React.useState(false);

  const navigate = useNavigate();

  const location = useLocation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleItemClick = (text, item) => {
    setSelectedItem(text);
    navigate(item.key);
  };

  const handleLogoutClick = () => {
    setLogoutClicked(!logoutClicked);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            noWrap
            component="div"
            style={{ color: "#1B1B1B", fontSize: "20px", fontWeight: 500 }}
          >
            Dashboard
          </Typography>
          <Typography
            style={{ color: "#1B1B1B", fontSize: "20px", fontWeight: 500 }}
          >
            <NotificationsOutlinedIcon />
            <img alt="user" src={user} style={{ width: "40%" }} />
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <DrawerHeader>
          <img
            src={Logo}
            alt="img"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              objectFit: "contain",
              height: "8%",
              width: "70%",
            }}
          />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List>
          {itemList.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => handleItemClick(item.text, item)}
                className={location.pathname === item.key ? "selected" : ""}
                // sx={{
                //   backgroundColor:
                //     selectedItem === item.text ? "#134EDF" : "transparent",
                // }}
              >
                <ListItemIcon
                  className={location.pathname === item.key ? "selected" : ""}
                  // sx={{
                  //   color: selectedItem === item.text ? "#FFFFFF" : "black",
                  // }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  className={location.pathname === item.key ? "selected" : ""}
                  // sx={{
                  //   color: selectedItem === item.text ? "#FFFFFF" : "black",
                  // }}
                >
                  {item.text}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 40,
            paddingLeft: 20,
            paddingRight: 20,
            // borderStyle: "solid",
            // borderColor: "#3064E3",
          }}
        >
          <Button
            onClick={handleLogoutClick}
            sx={{
              backgroundColor: logoutClicked ? "#134EDF" : "transparent",
              color: logoutClicked ? "#FFFFFF" : "#134EDF",
            }}
          >
            <ExitToAppOutlinedIcon /> Logout
          </Button>
        </div>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#F1F5FF",
          p: 3,
          heigth: "100%",
          width: "100%",
        }}
      >
        <Toolbar />
        <Typography style={{ fontSize: "24px", fontWeight: 400 }}>
          Dashboard Overview
        </Typography>
        <div
          style={{
            gap: 20,
            display: "flex",
            margin: 10,
          }}
        >
          {cardContents.map((content, index) => (
            <Card
              key={index}
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  {content.title}
                </Typography>

                <CardActions disableSpacing>
                  <IconButton style={{ color: "#134EDF" }}>
                    {content.icon}
                  </IconButton>
                  <Typography style={{ fontWeight: 500, fontSize: "30px" }}>
                    {content.count}
                  </Typography>
                </CardActions>
              </CardContent>
            </Card>
          ))}
        </div>

        <Progress services={servicesData} />
      </Box>
    </Box>
  );
}
