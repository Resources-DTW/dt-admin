import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Logo from "../assests/Logo.png";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DescriptionIcon from "@mui/icons-material/Description";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const itemList = [
  { text: "Over view", icon: <HomeIcon />, key: "/home" },
  { text: "Leads", icon: <GroupIcon />, key: "/leads" },
  { text: "Case Study", icon: <AssignmentIcon />, key: "/" },
  { text: "Blogs", icon: <DescriptionIcon />, key: "/" },
  { text: "Users", icon: <PeopleAltIcon />, key: "/" },
];

export default function Sider() {
  const [selectedItem, setSelectedItem] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleItemClick = (text, item) => {
    setSelectedItem(text);
    navigate(item.key);
  };

  return (
    <div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
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
        <List>
          {itemList.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => handleItemClick(item.text, item)}
                className={location.pathname === item.key ? "selected" : ""}
                sx={{
                  backgroundColor:
                    selectedItem === item.text ? "#134EDF" : "transparent",
                }}
              >
                <ListItemIcon
                  className={location.pathname === item.key ? "selected" : ""}
                  sx={{
                    color: selectedItem === item.text ? "#FFFFFF" : "black",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  className={location.pathname === item.key ? "selected" : ""}
                  sx={{
                    color: selectedItem === item.text ? "#FFFFFF" : "black",
                  }}
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
          <Button fullWidth style={{ color: "#134EDF" }}>
            <ExitToAppOutlinedIcon /> Logout
          </Button>
        </div>
      </Drawer>
    </div>
  );
}
