import { getSession, signOut, useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>NextAuthApp | Homepage</title>
      </Head>

      {session ? User({ session }) : Guest()}
    </div>
  );
}

//guest
function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Guest Homepage</h3>
      <div className="flex justify-canter">
        <Link
          href={"/login"}
          className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-white font-bold mx-auto"
        >
          Sign In
        </Link>
      </div>
    </main>
  );
}

//authorized user
function User({ session }) {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Authorize User Homepage</h3>

      <div className="details">
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>
      <div className="flex justify-center">
        <button
          className="mt-5 px-10 py-1 rounded-sm bg-gray-50 text-gray-800 font-bold border"
          onClick={signOut}
        >
          Sign Out
        </button>
      </div>

      <div className="flex justify-canter">
        <Link
          href={"/profile"}
          className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-white font-bold mx-auto"
        >
          Profile Page
        </Link>
      </div>
    </main>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) { 
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
