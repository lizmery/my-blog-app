import Image from "next/image";
import styles from "./about.module.css"
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={`container ${styles.aboutWrapper}`}>
        <div className={styles.row}>
          <h4 className='subtitle'>Subtitle goes here </h4>
          <h1 className={styles.title}>about us</h1>
        </div>

        <div className={styles.container}>
          <div className={styles.textContainer}>
            <p className={styles.desc}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              blanditiis adipisci minima reiciendis a autem assumenda dolore. 
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              blanditiis adipisci minima reiciendis a autem assumenda dolore. 
            </p>
            <p className={styles.desc}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              blanditiis adipisci minima reiciendis a autem assumenda dolore. 
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              blanditiis adipisci minima reiciendis a autem assumenda dolore. 
            </p>
            <p className={styles.desc}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              blanditiis adipisci minima reiciendis a autem assumenda dolore. 
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              blanditiis adipisci minima reiciendis a autem assumenda dolore. 
            </p>
          </div>
          <div className={styles.about_imgWrapper}>
            <div className={styles.about_banner}>
              <Image src='/aboutImg.jpg' alt='' fill className={styles.about_profile} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About