import React from "react";
import { useForm } from "react-hook-form";
import { Button, Card, Typography } from "@mui/material";
import { uploadBytes, ref } from "firebase/storage";
import { auth, storage } from "../../helpers/firebaseConfig";
const ProfilePhotoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    const photo = data.profilePhoto[0];
    const storageRef = ref(storage, `/users/${auth.currentUser.uid}/profile`);
    uploadBytes(storageRef, photo).then(() =>
      console.log("Uploaded the file successfully")
    );
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Card sx={{ p: "1rem" }}>
        <Typography variant="h6" sx={{ fontSize: "1rem" }} align="center">
          Upload your profile picture
        </Typography>
        <Button
          variant="contained"
          component="label"
          sx={{
            display: "block",
            mx: "auto",
            my: "1rem",
            alignContent: "center",
          }}
        >
          <Typography variant="h6" sx={{ fontSize: "1rem" }} align="center">
            Select a file
          </Typography>
          <input
            type="file"
            hidden
            {...register("profilePhoto", { required: true })}
          />
        </Button>
        <Button
          type="submit"
          variant="contained"
          sx={{ display: "block", mx: "auto" }}
        >
          Upload
        </Button>
      </Card>
    </form>
  );
};

export default ProfilePhotoForm;
