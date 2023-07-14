"use client";

import { Button } from "@mui/material";
import { signIn } from "next-auth/react";

const SignIn = () => (
  <Button
    variant="contained"
    onClick={() => signIn(undefined, { callbackUrl: "/user" })}
  >
    Sign in
  </Button>
);

export default SignIn;
