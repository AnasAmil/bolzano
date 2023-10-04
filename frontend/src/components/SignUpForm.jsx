import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "react-simple-snackbar";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const options = {
    position: "bottom-left",
    style: {
      backgroundColor: "#4BB543",
      color: "white",
      fontSize: "15px",
      fontWeight: "bold",
      textAlign: "center",
      width: "80px",
    },
    closeStyle: {
      color: "white",
      fontSize: "15px",
    },
  };

  const [openSnackbar, closeSnackbar] = useSnackbar(options);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    await axios
      .post("http://127.0.0.1:8000/api/accounts/signup/", credentials)
      .then((res) => {
        openSnackbar("Signed up successfully", 5000);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Stack alignItems={'center'} gap={'40px'}>
      <Box 
        sx={{
          fontWeight: 'bold',
          fontSize: '40px'
        }}
      >
        <h1>Sign Up</h1>
      </Box>
      <form
        className="flex flex-col w-1/4 gap-5 m-auto"
        onSubmit={handleRegister}
      >
        <TextField
          label="Username"
          variant="outlined"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
        <TextField
          label="E-mail"
          variant="outlined"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
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
            label="Password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
        </FormControl>

        <Button
          variant="contained"
          type="submit"
          sx={{
            width: "50%",
            mx: "auto",
            backgroundColor: "#272627",
            "&.MuiButtonBase-root:hover": { bgcolor: "#272627" },
            boxShadow: "none",
          }}
        >
          SIGNUP
        </Button>
      </form>
    </Stack>
  );
};

export default SignUpForm;
