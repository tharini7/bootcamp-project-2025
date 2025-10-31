import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";
 

export default function Navbar() {
  return (

    <header className={style.navbar}>
      <nav className={style.navbar}>
      <h1 className={style.logo}>
        <Link href="/">Tharini's Personal Website</Link>
        </h1>
      <ul className={style.navList}>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/contact">Contact</Link>
      </ul>
    </nav>
    </header>
  );
}