import ChooseProvider from "@/components/ChooseProvider";
import { getUser } from "@/utils/auth";
import { Button, Card, CardContent, CardHeader, Stack } from "@mui/material";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function Login() {
  const user = await getUser();
  if (user) return redirect("/user");
  const providers = (await getProviders()) || [];

  return (
    <Card variant="outlined" sx={{ margin: 2, maxWidth: 500, width: "100%" }}>
      <CardHeader title="Pick one" subheader="The illusion of choice" />
      <CardContent>
        <Stack spacing={1}>
          {Object.values(providers).map((provider) => (
            <ChooseProvider provider={provider} />
          ))}
          <Button fullWidth variant="contained" disabled>
            Sign in with github
          </Button>
          <Button fullWidth variant="contained" disabled>
            Sign in with email
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
