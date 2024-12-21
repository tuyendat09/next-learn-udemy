import LogoImages from "../assets/logo.png";
import Image from "next/image";
import classes from "./main-header.module.css";
import MainHeaderBackground from "@/components/MainHeaderBackground";
import NavLink from "./NavLink";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href={"/"}>
          <Image src={LogoImages} alt="LogoImages" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>

            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
