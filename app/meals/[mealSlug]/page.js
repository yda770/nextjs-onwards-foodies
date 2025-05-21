import Image from 'next/image';

import { getMeal } from '@/lib/meals';
import classes from './page.module.css';
import { notFound } from 'next/navigation';

//dynamic meta data
export async function generateMetadata({ params }) {
    const { mealSlug } = await params
    const meal = getMeal(mealSlug);

    if (!meal) {
        notFound();
    }

    return {
        title: meal.title,
        description: meal.summary,
    }
}

export default async function MealDetailsPage({ params }) {
    const { mealSlug } = await params
    const meal = getMeal(mealSlug);

    if (!meal) {
        notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, '<br />');

    return <>
        <header className={classes.header}>
            <div className={classes.image}>
                <Image src={meal.image} alt={meal.title} fill />
            </div>

            <div className={classes.headerText}>
                <h1>{meal.title}</h1>
                <p className={classes.creator}>DESCRIPTION
                    by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                </p>
                <p className={classes.summary}>{meal.summary}</p>
            </div>
        </header>
        <main>
            <p className={classes.instructions} dangerouslySetInnerHTML={{ __html: meal.instructions, }}>

            </p>

        </main >
    </>
}