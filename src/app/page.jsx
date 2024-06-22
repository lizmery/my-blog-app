import Image from "next/image";
import styles from "./home.module.css"
import Link from "next/link";
import Blurb from "../components/home/Blurb";
import About from "../components/home/About";
import Services from "../components/home/Services";
import ContactSection from "../components/home/ContactSection";

const Home = () => {
  return (
    <div className={styles.section}>
      <div className={`${styles.container} container`}>
        <div className={styles.textContainer}>
          <div>
            <h4 className={styles.subtitle}>Subtitle goes here </h4>
            <h1 className={styles.title}>Your <span>Title</span>.</h1>
          </div>
       
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            blanditiis adipisci minima reiciendis a autem assumenda dolore. 
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            blanditiis adipisci minima reiciendis a autem assumenda dolore. 
          </p>

          <div className={styles.buttons}>
            <Link href='/about'><button className={styles.btn}>Contact</button></Link>
            <Link href='/contact'><button className={`${styles.btn} ${styles.secondaryBtn}`}>Portfolio</button></Link>
          </div>
        </div>
        <div className={styles.home_imgWrapper}>
          <div className={styles.home_banner}>
            <Image src='/heroImg.jpg' alt='' fill className={styles.home_profile} />
          </div>  
        </div>
      </div>
   
      <Blurb />
      <About />
      <Services />
      <ContactSection />
    </div>
  );
};

export default Home;