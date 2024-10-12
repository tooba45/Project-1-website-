import Link from 'next/link'
import styles from "../services/service.module.css";

const ServicePage = () => {
  return (
    <div className= {styles.container}>
      <h1 className= {styles.header}>This is service page</h1>

      <ul className= {styles.list}>
        <li><Link href="/services/video-editing">This is video editing page</Link></li>
        <li><Link href="/services/web-development">This is web development page</Link></li>
      </ul>
      
    </div>
  )
}

export default ServicePage;
