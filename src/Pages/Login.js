import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "../assests/Logo.png";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Formbanner from "../components/Formbanner";
import { Maincontainer } from "../styles/Styles";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const forget = async () => {
    navigate("/forget");
  };
  const home = async () => {
    navigate("/home");
  };
  return (
    <Maincontainer>
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main">
          <CssBaseline />
          <Formbanner />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
              }}
            >
              <img
                src={Logo}
                style={{
                  height: "12%",
                  width: "40%",
                }}
              />

              <div>
                <Typography
                  component="h1"
                  style={{ fontSize: "56px", fontWeight: 700 }}
                >
                  Welcome back!
                </Typography>
                <Typography
                  component="h1"
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    textAlign: "center",
                  }}
                >
                  Please enter your details below
                </Typography>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box component="form" noValidate onSubmit={handleSubmit} />
                <form noValidate autoComplete="on">
                  <FormControl style={{ gap: 8 }} variant="outlined">
                    <TextField
                      size="small"
                      margin="normal"
                      id="outlined-basic"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      //   InputProps={{
                      //     startAdornment: (
                      //       <InputAdornment position="start">
                      //         {" "}
                      //         <FontAwesomeIcon
                      //           icon={faEnvelope}
                      //           style={{ color: "#BBBBBB" }}
                      //         />
                      //       </InputAdornment>
                      //     ),
                      //   }}
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "8px",
                        "& input": {
                          paddingRight: "120px",
                        },
                      }}
                      InputLabelProps={{
                        style: { fontSize: "15px" },
                      }}
                    />

                    <FormControl variant="outlined">
                      <InputLabel
                        htmlFor="outlined-adornment-password"
                        style={{
                          fontSize: "15px",
                          marginTop: "-5px",
                        }}
                      >
                        Password
                      </InputLabel>
                      <OutlinedInput
                        size="small"
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        // startAdornment={
                        //   <InputAdornment position="start">
                        //     <FontAwesomeIcon
                        //       icon={faLock}
                        //       style={{ color: "#BBBBBB" }}
                        //     />
                        //   </InputAdornment>
                        // }

                        style={{
                          backgroundColor: "white",
                        }}
                        label="Password"
                      />
                    </FormControl>

                    <div>
                      <a
                        href=""
                        style={{
                          float: "right",
                          textDecoration: "none",
                          color: "#1B1B1B",
                          fontSize: "15px",
                          fontWeight: 400,
                        }}
                        onClick={forget}
                      >
                        Forget Password
                      </a>
                    </div>

                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      style={{
                        borderRadius: "8px",
                        backgroundColor: "#134EDF",
                      }}
                      onClick={home}
                    >
                      LOGIN
                    </Button>
                  </FormControl>
                </form>
              </div>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Maincontainer>
  );
}
