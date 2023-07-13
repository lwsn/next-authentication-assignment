import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

const App = ({
  Component,
  pageProps: { session, ...pageProps },
}: {
  Component: React.ComponentType<any>;
  pageProps: { session: Session };
}) => (
  <SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>
);

export default App;
