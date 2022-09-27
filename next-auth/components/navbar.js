import React from "react";
import Link from "next/link";
import { getSession, signIn, signOut, useSession } from "next-auth/react";

function Navbar() {
  const { data: session, status } = useSession();
  console.log(session);
  const loading = status === "loading";
  return (
    <nav className="header">
      <h1 className="logo">
        <Link href="">
          <a>AppAuth</a>
        </Link>
      </h1>
      <ul className={`main-nav ${!session && loading ? "loading" : "loaded"}`}>
        <Link href="/">
          <a>Home</a>
        </Link>
        {status === "authenticated" && (
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        )}
        <Link href="/blog">
          <a>Blog</a>
        </Link>

        {status === "authenticated" ? (
          <Link href="/signout">
            <a
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign Out
            </a>
          </Link>
        ) : (
          <Link href="/signin">
            <a
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Sign In
            </a>
          </Link>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;

export const getServerSideProps = async () => {
  return {
    props: {
      data: "Test data",
    },
  };
};
