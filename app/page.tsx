import Link from "next/link"
import styles from "../app/home.module.css";

const HomePage = () => {
  return (
    <div>
      <ul>
            <li className={styles.home}><Link href="/">Home</Link></li>
            <li className={styles.about}><Link href="/about" target="_blank">About</Link></li>
            <li className={styles.contact}><Link href="/contact" target="_blank">Contact</Link></li>
            <li className={styles.services}><Link href="/services" target="_blank">Services</Link></li>

        </ul>
      
    </div>
  )
}

export default HomePage;

