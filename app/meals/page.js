import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "../community/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
    title: 'All meals',
    description: 'Browse the delicious meals .',
};

// asynchronous is working only with server components 

async function Meals() {
    // this is a server component
    // we can fetch data here
    const meals = await getMeals();

    return <MealsGrid meals={meals} />
}

export default function MealsPage() {
    return <>
        <header className={classes.header}>
            <h1>Delicious meals, created{' '}
                <span className={classes.highlight}>by you</span>
            </h1>
            <p>Choose your favorite recipe and cooke it yourself. It easy...</p>
            <p className={classes.cta}>
                <Link href="/meals/share">
                    Share your own recipe
                </Link>
            </p>
        </header>
        <main className={classes.main}>
            <Suspense fallback={<p className={classes.loading}>Loading meals...</p>}>
                <Meals />
            </Suspense>
        </main>
    </>
}