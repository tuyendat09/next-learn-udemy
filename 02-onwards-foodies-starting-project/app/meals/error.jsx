"use client";

export default function error({ error }) {
  return (
    <main className="error">
      <h1>Meal not found {":("}</h1>
      <p>Failed to find your meal. Please try again later</p>
    </main>
  );
}
