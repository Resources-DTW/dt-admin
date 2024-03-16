import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import user from "../assests/user.png";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  IconButton,
  LinearProgress,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Sider from "../components/Drawer";
import GroupIcon from "@mui/icons-material/Group";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import DescriptionIcon from "@mui/icons-material/Description";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Progress from "../components/Progress";

const drawerWidth = 240;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={{ display: "flex" }}>
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

    

        {/* <div>
          <Card style={{ borderRadius: "16px" }}>
            <CardContent>
              <Typography
                style={{ fontSize: 18, fontWeight: 500, color: "#1B1B1B" }}
              >
                Popular Interested Services
              </Typography>

              <Divider style={{ marginTop: 10 }} />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: 5,
                    width: "45%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <p>UI/UX</p>
                    <p>28</p>
                  </div>
                  <div>
                    <LinearProgress variant="determinate" value={28} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Web App Development</p>
                    <p>18</p>
                  </div>
                  <div>
                    <LinearProgress variant="determinate" value={18} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Mobile App Development</p>
                    <p>20</p>
                  </div>
                  <div>
                    <LinearProgress variant="determinate" value={20} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Full Stack Engineering</p>
                    <p>48</p>
                  </div>
                  <div>
                    <LinearProgress variant="determinate" value={48} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <p>Product Engineering</p>
                    <p>48</p>
                  </div>
                  <div>
                    <LinearProgress variant="determinate" value={48} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <p>Share Point Services</p>
                    <p>48</p>
                  </div>
                  <div>
                    <LinearProgress variant="determinate" value={48} />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: 5,
                    width: "45%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <p>Out Systems</p>
                    <p>28</p>
                  </div>
                  <div>
                    <LinearProgress variant="determinate" value={28} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>E-Commerce Development</p>
                    <p>18</p>
                  </div>
                  <div>
                    <LinearProgress variant="determinate" value={18} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>CMS Development</p>
                    <p>20</p>
                  </div>
                  <div>
                    <LinearProgress variant="determinate" value={20} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>QA Services</p>
                    <p>48</p>
                  </div>
                  <div>
                    <LinearProgress variant="determinate" value={48} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>DevOps</p>
                    <p>48</p>
                  </div>
                  <div>
                    <LinearProgress variant="determinate" value={48} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Digital Marketing</p>
                    <p>48</p>
                  </div>
                  <div>
                    <LinearProgress variant="determinate" value={48} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </Box>
    </div>
  );
}
