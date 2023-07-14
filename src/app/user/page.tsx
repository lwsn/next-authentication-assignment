import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import SignOut from "@/components/SignOut";
import { getUser } from "@/utils/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getUser();

  if (!user) return redirect("/");

  return (
    <Card variant="outlined" sx={{ margin: 2, maxWidth: 500, width: "100%" }}>
      <CardHeader
        avatar={
          <Avatar src={user.image ?? undefined}>
            {user.name?.[0].toUpperCase()}
          </Avatar>
        }
        title={user.name ?? "Anonymous"}
        subheader={user.email}
      />
      <CardContent>
        <Typography variant="body1">
          Hello {user.name ?? "anonymous user"}.
        </Typography>

        <Typography variant="body2">
          Looks like your email is {user.email}.
        </Typography>

        <Typography variant="body2">
          You can see your avatar up to the left, if you have one.
        </Typography>
        <Typography variant="body2">
          That's about all there is to see here, feel free to sign out.
        </Typography>
      </CardContent>
      <CardActions>
        <SignOut />
      </CardActions>
    </Card>
  );
}
