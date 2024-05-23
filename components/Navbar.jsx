import React from 'react'
import Link from "next/link"
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <header>
    <nav cLassName={styles.nav}>
    <p>Next. js</p>
    <ul className={styles.links}>
    <Link href='/'> < li>Home 🏠</li></Link>
    <Link href='/cart' ><li>Cart</li></Link>
    <Link href='/contact' ><li>Contact 📞</li></Link>
    </ul>
    </nav>
    </header>
  )
}

export default Navbar