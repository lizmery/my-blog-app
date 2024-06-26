import styles from './contactSection.module.css'
import Link from 'next/link'

const ContactSection = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.row}`}>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit? Tempora laudantium soluta pariatur eaque. </h2>
                <Link href='/contact'><button className={styles.btn}>Contact Us</button></Link>
            </div>
        </div>
    )
}

export default ContactSection