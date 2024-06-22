import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>logo</div>
        <div className={styles.text}>company name © All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer