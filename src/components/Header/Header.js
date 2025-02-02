"use client";
import classes from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";
import Minicart from "../MiniCart/Minicart";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header>
      <nav className={classes.nav}>
        <div className={classes.imageContatiner}>
          <Link href="/">
            <h1 className={classes.logoTitle}>Velora</h1>
          </Link>
        </div>
        <div className={classes.linksContainer}>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About Us</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div className={classes.actionsContainer}>
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <input type="text" placeholder="Search" />
          <button className="minicart-btn" onClick={() => setIsCartOpen(true)}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
          {isCartOpen && <Minicart onClose={() => setIsCartOpen(false)} />}
          <a href="#">Log in</a>
        </div>
      </nav>
    </header>
  );
}
