import Link from "next/link";
import classes from "./page.module.css";
import MealGrid from "@/components/Meals/meal-grid";
import { getMeals } from "@/libs/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();
  return <MealGrid meals={meals} />;
}

export default function MealPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={"Loading..."}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
