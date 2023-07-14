"use client";

import { Button } from "@mui/material";
import { ClientSafeProvider, signIn } from "next-auth/react";

const SignIn = ({ provider }: { provider?: ClientSafeProvider }) => (
  <Button
    fullWidth={!!provider}
    variant="contained"
    onClick={() =>
      signIn(provider?.id, {
        callbackUrl: "/user",
      })
    }
  >
    Sign in{provider?.name && ` with ${provider.name}`}
  </Button>
);

export default SignIn;
