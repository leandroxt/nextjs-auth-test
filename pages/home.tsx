import { auth } from "@lib/firebase";
import AuthenticationChecker from "component/AuthenticationChecker";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  async function logout() {
    await auth.signOut();
    router.push("/");
  }
  return (
    <div>
      <Head>
        <title>Testing firebase auth</title>
        <meta name="description" content="Authentication by firebase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AuthenticationChecker>
        <main>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <p>Home - private</p>
            <button type="button" onClick={logout}>
              Log out
            </button>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
              border: 'dashed 2px #ccc'
            }}
          >
            <input type="file" />
          </div>
        </main>
      </AuthenticationChecker>
    </div>
  );
}
