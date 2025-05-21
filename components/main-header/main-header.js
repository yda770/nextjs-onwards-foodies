import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-backgroung";
import NavLink from "./nav-link";

export default function MainHeader() {

    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logoImg} alt="A Plate with food" priority />
                    NextJS Meals
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Browes Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Foodies community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}