import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";
import axios from "axios";
import { TextField, Button, Container, Typography, Paper } from "@mui/material";

const API = "http://35.234.115.220/api/v1/account/register/";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { handleRegister } = useContext(authContext);

  const handleSubmit = async () => {
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(API, {
        email: email,
        password: password,
        password2: confirmPassword,
      });

      if (response.data.password2) {
        alert("This field is required.");
        return;
      }

      const user = {
        email,
        password,
        password_confirm: confirmPassword,
      };

      handleRegister(user, navigate);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h4" align="center">
          Register
        </Typography>
        <form>
          <TextField
            label="Email"
            fullWidth
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            variant="outlined"
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            Sign up
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Register;
