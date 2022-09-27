import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>Next JS Pre-Rendering</h1>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </>
  );
}
