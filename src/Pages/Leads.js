import React from "react";
import Sider from "../components/Drawer";
import { AppBar, Toolbar, Typography } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import user from "../assests/user.png";

const drawerWidth = 240;

export default function Leads() {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <div>
        <Sider />
      </div>
      <div>
        <AppBar
          position="fixed"
          open={open}
          style={{ backgroundColor: "#FFFFFF" }}
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            {/* <IconButton
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
            </IconButton> */}
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
      </div>
    </div>
  );
}
