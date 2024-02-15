import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
   <div className={styles.main}>
    <div className={styles.outer_div}>
      <div className={styles.left_div}>

      </div>
      <div className={styles.right_div}>
        <h1>Make Every Transaction More Profitable</h1>
      </div>
    </div>
   </div>
  );
}


