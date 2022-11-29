import { ChangeEvent, FormEvent, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { auth, signInWithEmailAndPassword } from "@lib/firebase";

export default function Home() {
  const router = useRouter();
  const [{ email, password }, setState] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  function onChange({ target }: ChangeEvent<HTMLInputElement>) {
    setState((ps) => ({ ...ps, [target.id]: target.value }));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        console.log({ user });
        router.push("/home");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error({ errorCode, errorMessage });
      });
  }

  return (
    <div>
      <Head>
        <title>Testing firebase auth</title>
        <meta name="description" content="Authentication by firebase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <form
          onSubmit={onSubmit}
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          Login
          <input
            type="email"
            id="email"
            value={email}
            onChange={onChange}
            placeholder="email"
          />
          <input
            type="password"
            id="password"
            value={password}
            onChange={onChange}
            placeholder="your passwd"
          />
          <button type="submit">Enter</button>
        </form>
      </main>
    </div>
  );
}
