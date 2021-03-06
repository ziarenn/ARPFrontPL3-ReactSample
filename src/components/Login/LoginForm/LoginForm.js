import React from "react";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { auth } from "../../../helpers/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
    signInWithEmailAndPassword(auth, data.email, data.password).then(creds => console.log(creds.user))
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <TextField
        placeholder="email"
        variant="outlined"
        type="email"
        {...register("email", { required: true })}
        sx={{ display: "block", my: ".5rem" }}
        align="center"
      />
      <TextField
        placeholder="password"
        variant="outlined"
        type="password"
        {...register("password", { required: true })}
        sx={{ display: "block", mb: ".5rem" }}
        align="center"
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ display: "block", mb: "1rem", mx: "auto" }}
      >
        Log in
      </Button>
    </form>
  );
};

export default Login;
