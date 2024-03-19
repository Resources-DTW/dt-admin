// import React, { useState } from "react";
// // import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import Logo from "../assests/Logo.png";
// import HomeIcon from "@mui/icons-material/Home";
// import GroupIcon from "@mui/icons-material/Group";
// import AssignmentIcon from "@mui/icons-material/Assignment";
// import DescriptionIcon from "@mui/icons-material/Description";
// import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
// import Button from "@mui/material/Button";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Drawer, IconButton, useTheme } from "@mui/material";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// const drawerWidth = 240;

// const itemList = [
//   { text: "Over view", icon: <HomeIcon />, key: "/home" },
//   { text: "Leads", icon: <GroupIcon />, key: "/leads" },
//   { text: "Case Study", icon: <AssignmentIcon />, key: "/casestudy" },
//   { text: "Blogs", icon: <DescriptionIcon />, key: "/blogs" },
//   { text: "Users", icon: <PeopleAltIcon />, key: "/" },
// ];

// export default function Sider() {
//   const [selectedItem, setSelectedItem] = useState("");
//   const [logoutClicked, setLogoutClicked] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   // const theme = useTheme();

//   // const handleDrawerClose = () => {
//   //   setOpen(false);
//   // };

//   const handleItemClick = (item) => {
//     // setSelectedItem(text);
//     navigate(item.key);
//   };

//   const handleLogoutClick = () => {
//     setLogoutClicked(!logoutClicked);
//   };

//   return (
//     <div>
//     <Drawer
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         "& .MuiDrawer-paper": {
//           width: drawerWidth,
//           boxSizing: "border-box",
//         },
//       }}
//       variant="persistent"
//       anchor="left"
//       open={open}
//     >
//       <DrawerHeader>
//         <img
//           src={Logo}
//           alt="img"
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             objectFit: "contain",
//             height: "100%",
//             width: "70%",
//           }}
//         />
//         <IconButton onClick={handleDrawerClose}>
//           {theme.direction === "ltr" ? (
//             <ChevronLeftIcon />
//           ) : (
//             <ChevronRightIcon />
//           )}
//         </IconButton>
//       </DrawerHeader>

//       <List>
//         {itemList.map((item, index) => (
//           <ListItem key={index} disablePadding>
//             <ListItemButton
//               onClick={() => handleItemClick(item)}
//               className={location.pathname === item.key ? "selected" : ""}
//               // sx={{
//               //   backgroundColor:
//               //     selectedItem === item.text ? "#134EDF" : "transparent",
//               // }}
//             >
//               <ListItemIcon
//                 className={location.pathname === item.key ? "selected" : ""}
//                 // sx={{
//                 //   color: selectedItem === item.text ? "#FFFFFF" : "black",
//                 // }}
//               >
//                 {item.icon}
//               </ListItemIcon>
//               <ListItemText
//                 className={location.pathname === item.key ? "selected" : ""}
//                 // sx={{
//                 //   color: selectedItem === item.text ? "#FFFFFF" : "black",
//                 // }}
//               >
//                 {item.text}
//               </ListItemText>
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <div
//         style={{
//           position: "absolute",
//           bottom: 20,
//           left: 40,
//           paddingLeft: 20,
//           paddingRight: 20,
//           // borderStyle: "solid",
//           // borderColor: "#3064E3",
//         }}
//       >
//         <Button
//           onClick={handleLogoutClick}
//           sx={{
//             backgroundColor: logoutClicked ? "#134EDF" : "transparent",
//             color: logoutClicked ? "#FFFFFF" : "#134EDF",
//           }}
//         >
//           <ExitToAppOutlinedIcon /> Logout
//         </Button>
//       </div>
//     </Drawer>
//   </div>
//   );
// }
