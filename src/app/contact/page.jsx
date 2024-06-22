import styles from "./contact.module.css"

export const metadata = {
  title: 'Contact Page',
  description: 'Contact description goes here...'
}

const Contact = () => {
  return (
    <div className={`container ${styles.contactWrapper}`}>
      <div className={`${styles.container}`}>
        <div className={styles.textContainer}>
          <h3 className={styles.subtitle}>Contact Us</h3>
          <h1 className={styles.title}>Send us a message</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className={styles.formContainer}>
          <form action="" className={styles.form}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone Number (Optional)" />
            <textarea 
              name="" 
              id="" 
              cols="30" 
              rows="10"
              placeholder="Message"
            ></textarea>
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact