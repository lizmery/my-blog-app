import Image from "next/image";
import styles from "./home.module.css"
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>App Title Goes Here.</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className={styles.buttons}>
          <Link href='/about'><button className={styles.btn}>Learn More</button></Link>
          <Link href='/contact'><button className={`${styles.btn} ${styles.secondaryBtn}`}>Contact</button></Link>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src='/hero.svg' alt='' fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;