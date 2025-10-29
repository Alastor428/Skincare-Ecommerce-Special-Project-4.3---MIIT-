import { Button, Stack } from "@mui/material";
import React from "react";

export const SignInButton = () => {
  return (
    <Stack justifyContent="center">
      <Button
        variant="contained"
        sx={{
          width: "144px",
          height: "40px",
          borderRadius: "30px",
          background: "#1E1E1E",
          boxShadow: "0px 8px 9.7px 0px #00000040",
          fontFamily: "Poppins, Medium",
          fontSize: "20px",
          fontWeight: 500,
          color: "#FFFFFF",
          textTransform: "none",
          "& span": {
            width: "68px",
            height: "30px",
            transform: "rotate(0deg)",
            opacity: 1,
          },

          "&:hover": {
            background: "#2A2A2A",
          },
        }}
      >
        Sign In
      </Button>
    </Stack>
  );
};
