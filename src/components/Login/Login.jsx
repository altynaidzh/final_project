import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";
import { TextField, Button, Container, Typography, Paper } from "@mui/material";

const API = "http://35.234.115.220/api/v1/account/login/";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { loading, error, handleLogin } = useContext(authContext);

  const handleSignIn = () => {
    const userData = {
      email,
      password,
    };
    handleLogin(userData, navigate);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h4" align="center">
          Login
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
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSignIn}
          >
            Sign in
          </Button>
        </form>
        <Typography
          variant="body2"
          align="center"
          style={{ marginTop: "20px" }}
        >
          New user? <Link to="/register">Create account</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Login;
