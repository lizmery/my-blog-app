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
            <h4 className='subtitle'>Subtitle goes here </h4>
            <h1 className={styles.title}>Your <span>Title</span>.</h1>
          </div>
       
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            blanditiis adipisci minima reiciendis a autem assumenda dolore. 
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            blanditiis adipisci minima reiciendis a autem assumenda dolore. 
          </p>

          <div className={styles.buttons}>
            <Link href='/contact'><button className={styles.btn}>Contact</button></Link>
            <Link href='/portfolio'><button className={`${styles.btn} ${styles.secondaryBtn}`}>Portfolio</button></Link>
          </div>
        </div>
        <div className={styles.home_imgWrapper}>
          <div className={styles.home_banner}>
            <Image src='/heroImg.jpg' alt='' fill className={styles.home_profile} />
          </div>  
        </div>

      </div>

<div className={styles.heroSvg}>
<div class="custom-shape-divider-bottom-1719867639">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
</div>


   
      {/* <Blurb /> */}

      <About />

      <Services />

      <div className={styles.heroSvg}>
      <div class="custom-shape-divider-bottom-1719867639">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
      </div>
      <ContactSection />
    </div>
  );
};

export default Home;