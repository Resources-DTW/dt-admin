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

export default function Forgot() {
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
            <img alt="logo" src={Logo} className="Logo" />

            <div>
              <h1 className="Title">Welcome back!</h1>
              <h2 className="Sub_Title">Please enter your details below</h2>
            </div>

            <div className="Box">
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
                    className="Login_button"
                    onClick={confirm}
                  >
                    SEND
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

// import React from "react";

// export default function Forgot() {
//   return <div>forgot page</div>;
// }
