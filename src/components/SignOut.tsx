"use client";

import { Button } from "@mui/material";
import { signOut } from "next-auth/react";

const SignOut = () => (
  <Button variant="contained" onClick={() => signOut({ callbackUrl: "/" })}>
    Sign out
  </Button>
);

export default SignOut;
