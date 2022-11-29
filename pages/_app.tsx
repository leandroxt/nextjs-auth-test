import type { AppProps } from "next/app";
import { UserContextProvider } from "@lib/user.context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}
