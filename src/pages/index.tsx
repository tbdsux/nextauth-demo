import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function OverviewPage() {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;

  if (status === "loading") {
    return <p>Hang on there...</p>;
  }

  if (status === "unauthenticated") {
    return (
      <>
        <p>Not signed in.</p>
        <Link href="/auth/signin">Sign In</Link>
      </>
    );
  }

  return (
    <>
      <p>Signed in as {userEmail}</p>
      <button onClick={() => signOut()}>Sign Out</button>
      <img src="https://cdn.pixabay.com/photo/2017/08/11/19/36/vw-2632486_1280.png" />
    </>
  );
}
