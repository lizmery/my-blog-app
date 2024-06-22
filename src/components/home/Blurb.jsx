import styles from './blurb.module.css'
import Link from 'next/link'

const Blurb = () => {
    return (
        <div className={`${styles.container}`}>
            <div className={styles.row}>
                <h2>Sign up for exclusive access to tips & tricks via our Blog!</h2>
                <Link href='/about'><button className={styles.btn}>Sign Up</button></Link>
            </div>
        </div>
    )
}

export default Blurb