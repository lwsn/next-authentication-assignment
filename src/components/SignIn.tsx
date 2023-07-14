"use client";

import { Button } from "@mui/material";
import { ClientSafeProvider, signIn } from "next-auth/react";

const ChooseProvider = ({ provider }: { provider: ClientSafeProvider }) => (
  <Button
    fullWidth
    variant="contained"
    onClick={() => signIn(provider.id, { callbackUrl: "/user" })}
  >
    Sign in with {provider.name}
  </Button>
);

export default ChooseProvider;
