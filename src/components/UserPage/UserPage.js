import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../helpers/firebaseConfig";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import ProfilePhotoForm from "../ProfilePhotoForm/ProfilePhotoForm";
const UserPage = ({ loggedIn }) => {
  return (
    <>
      {loggedIn && (
        <>
          <Typography
            variant="h2"
            sx={{
              fontSize: "2rem",
              my: "1rem",
              borderBottom: "1px solid #1976d2",
              pb: "0.5rem",
            }}
            align="center"
          >
            Your profile
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "1rem",
              my: "1rem",
              fontFamily: "Roboto",
              mx: "auto",
              mb: "100px",
            }}
            align="center"
          >
            Your email: {auth.currentUser.email}
          </Typography>
          <ProfilePhotoForm />
          <Button
            variant="outlined"
            onClick={() => signOut(auth)}
            sx={{ display: "block", mx: "auto", my: "1rem" }}
          >
            Log out
          </Button>
        </>
      )}
    </>
  );
};

export default UserPage;
