import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Logo from "../assests/Logo.png";

import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Formbanner from "../components/Formbanner";

const defaultTheme = createTheme();

export default function Blogs() {
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
                <FormControl style={{ gap: 15 }} variant="outlined">
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
                      label="Confirm Password"
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    className="Login_button"
                  >
                    SAVE
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
