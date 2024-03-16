import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Maincontainer } from "../styles/Styles";
import {
  Box,
  Button,
  CssBaseline,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Formbanner from "../components/Formbanner";
import Logo from "../assests/Logo.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const defaultTheme = createTheme();

export default function Confirm() {
  const [showPassword, setShowPassword] = useState(false);

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

  return (
    <div>
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
                    <FormControl
                      style={{
                        gap: 15,
                      }}
                      variant="outlined"
                    >
                      <FormControl
                        variant="outlined"
                        sx={{
                          "& input": {
                            paddingRight: "70px",
                          },
                        }}
                      >
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

                      <FormControl variant="outlined">
                        <InputLabel
                          htmlFor="outlined-adornment-password"
                          style={{
                            fontSize: "15px",
                            marginTop: "-5px",
                          }}
                        >
                          Confirm Password
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
                          label="Confirm Password"
                        />
                      </FormControl>

                      <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        style={{
                          borderRadius: "8px",
                          backgroundColor: "#134EDF",
                        }}
                      >
                        SEND
                      </Button>
                    </FormControl>
                  </form>
                </div>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      </Maincontainer>
    </div>
  );
}
