import React from "react";
import { Maincontainer } from "../styles/Styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Button,
  CssBaseline,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Logo from "../assests/Logo.png";
import Formbanner from "../components/Formbanner";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export default function Forget() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const confirm = async () => {
    navigate("/confirm");
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
              direction="column"
              alignItems="center"
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
                    <FormControl variant="outlined">
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

                      <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        style={{
                          borderRadius: "8px",
                          backgroundColor: "#134EDF",
                        }}
                        onClick={confirm}
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
