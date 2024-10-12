import Link from "next/link";
import style from "../contact/contact.module.css";

export default function Contact() {
  return (
    <div className={style.container}>
      <h1 className={style.header}>This is Contact Page</h1>

      <ul>
            <li><Link href="/">Go to Home Page</Link></li>
            <li><Link href="/about" target="_blank">Go to About Page</Link></li>
            <li><Link href="/services" target="_blank">Go to Services Page</Link></li>

        </ul>
    </div>
  );
}
