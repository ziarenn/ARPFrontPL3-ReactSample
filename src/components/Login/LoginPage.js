import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <Card sx={{ display: "block", mt: "2rem" }}>
        <LoginForm />
        <Card>
          <Typography variant="h2" sx={{ fontSize: "1rem" }} align="center">
            Don't have an account yet? Register now!
          </Typography>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              sx={{ display: "block", mx: "auto", my: ".5rem" }}
            >
              Register
            </Button>
          </Link>
        </Card>
      </Card>
    </>
  );
}

export default LoginPage;
