import React from "react";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { auth } from "../../../helpers/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
    if (data.password1 === data.password2) {
      createUserWithEmailAndPassword(auth, data.email, data.password1)
        .then((userCredential) => {
          console.log("Success");
          //BUG
          window.location.href = `${window.document.URL.split("/")[0]}/`;
          //BUG
        })
        .catch((err) => console.log(err.message));
    } else {
      console.log("Passwords do not match!");
    }
  };

  return (
    <Card sx={{ display: "block", mt: "2rem" }}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Typography align="center" variant="h2" sx={{ fontSize: "1.5rem" }}>
          Register a new account
        </Typography>
        <TextField
          variant="outlined"
          placeholder="email"
          type="email"
          {...register("email", { required: true })}
          sx={{ display: "block", my: ".5rem" }}
          align="center"
        />
        <TextField
          variant="outlined"
          placeholder="password"
          type="password"
          {...register("password1", { required: true })}
          sx={{ display: "block", my: ".5rem" }}
          align="center"
        />
        <TextField
          variant="outlined"
          placeholder="repeat password"
          type="password"
          {...register("password2", { required: true })}
          sx={{ display: "block", my: ".5rem" }}
          align="center"
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ display: "block", mx: "auto", mb: ".5rem" }}
        >
          Register
        </Button>
      </form>
    </Card>
  );
};

export default Register;
