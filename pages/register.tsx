import Head from "next/head";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "@lib/firebase";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [{ email, password }, setState] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  function onChange({ target }: ChangeEvent<HTMLInputElement>) {
    setState((ps) => ({ ...ps, [target.id]: target.value }));
  }

  function onsubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in

        sendEmailVerification(userCredential.user)
          .then(() => {
            confirm("Verifique seu email e confirme sua conta");
            router.push("/login");
          })
          .catch((err) => {
            console.error("Erro ao enviar email", { err });
          });
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
        Create new user
        <form onSubmit={onsubmit}>
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
