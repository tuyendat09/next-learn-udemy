import Link from "next/link";

export default function Blog() {
  return (
    <main>
      <h1>The blog</h1>
      <p>
        <p>
          <Link href={"/blog/post-1"}>Post 1</Link>
        </p>
        <p>
          <Link href={"/blog/post-2"}>Post 2</Link>
        </p>
      </p>
    </main>
  );
}
