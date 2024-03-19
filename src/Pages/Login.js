/* eslint-disable jsx-a11y/anchor-is-valid */
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
import Forgot from "./Forgot";

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

  const forgot = async () => {
    navigate("/forgot");
  };
  const home = async () => {
    navigate("/home");
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="Form_div">
        <Formbanner />

        <div className="Grid">
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={Logo} alt="logo" className="Logo" />

            <div>
              <h1 className="Title">Welcome back!</h1>
              <h2 className="Sub_Title">Please enter your details below</h2>
            </div>

            <div className="Box">
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
                            {showPassword ? <VisibilityOff /> : <Visibility />}
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
                    <a href="" onClick={forgot} className="Forgot">
                      Forget Password
                    </a>
                  </div>

                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    className="Login_button"
                    onClick={home}
                  >
                    LOGIN
                  </Button>
                </FormControl>
              </form>
            </div>
          </Box>
        </div>
      </div>
    </ThemeProvider>
  );
}
