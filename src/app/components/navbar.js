import React from 'react'
import styles from "./styles/navbar.module.css"
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className={styles.outer_div}>
      <ul className={styles.ulList}>
        <li><Link href="">About</Link></li>
        <li><Link href="">Pricing</Link></li>
        <li><Link href="">Product</Link></li>
        <li><Link href="">Contact</Link></li>
      </ul>
    </div>
  )
}
