import React from "react";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
const Form = ({ setKeyword }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (formData) => {
    setKeyword(formData.keyword);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <TextField
        variant="outlined"
        align="center"
        type="text"
        placeholder="Keywords"
        {...register("keyword", { required: true })}
        sx={{ mt: "0.4rem", mb: ".3rem", mx: "auto", display: "block" }}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{ display: "block", mx: "auto" }}
      >
        Search
      </Button>
    </form>
  );
};

export default Form;
