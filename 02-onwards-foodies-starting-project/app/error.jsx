"use client";

export default function error({ error }) {
  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>Failed to fecth meal data. Please try again later</p>
    </main>
  );
}
