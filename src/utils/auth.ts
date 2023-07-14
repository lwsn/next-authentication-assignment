import { getServerSession, Session, type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

export type User = NonNullable<Session["user"]>;

export const getUser = (): Promise<User | null> =>
  getServerSession(authOptions).then((s) => s?.user ?? null);
