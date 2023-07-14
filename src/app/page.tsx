import SignIn from "@/components/SignIn";
import {
  Card,
  CardActions,
  CardContent,
  Link,
  Typography,
} from "@mui/material";
import SignOut from "@/components/SignOut";
import { User, getUser } from "@/utils/auth";
import NextLink from "next/link";

const SignedInContent = ({ user }: { user: User }) => (
  <>
    <Typography variant="h5">Hi {user.name}</Typography>
    <Typography>
      Not too much to do here, you can either go to the{" "}
      <Link component={NextLink} href="/user">
        user page
      </Link>{" "}
      or sign out.
    </Typography>
  </>
);

const SignedOutContent = () => (
  <>
    <Typography variant="h5">Hello</Typography>
    <Typography>You can't do much without signing in.</Typography>
  </>
);

export default async function Home() {
  const user = await getUser();

  return (
    <Card variant="outlined" sx={{ margin: 2, maxWidth: 500, width: "100%" }}>
      <CardContent>
        {user ? <SignedInContent user={user} /> : <SignedOutContent />}
      </CardContent>
      <CardActions>{user ? <SignOut /> : <SignIn />}</CardActions>
    </Card>
  );
}
