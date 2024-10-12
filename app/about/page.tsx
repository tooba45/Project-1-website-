import styles from "../about/about.module.css";
import Link from "next/link";


export default function About() {
  return (
    <div className= {styles.container}>

        <h1 className={styles.header}>This is About Page</h1>
        <ul>
            <li><Link href="/">Go to Home Page</Link></li>
            <li><Link href="/contact" target="_blank">Go to Contact Page</Link></li>
            <li><Link href="/services" target="_blank">Go to Services Page</Link></li>

        </ul>
      
    </div>
  );
}