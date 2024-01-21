import Image from "next/image"
import styles from './about.module.css'

export const metadata = {
  title: 'About Page',
  description: 'About description...',
}

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Us</h2>
        <h1 className={styles.title}>Company blurb goes here...</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis 
          sapien id leo tincidunt porttitor. Interdum et malesuada fames ac 
          ante ipsum primis in faucibus. Fusce convallis, magna eget eleifend 
          feugiat, urna nisl auctor nulla, eu elementum erat diam quis tellus. 
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Something</p>
          </div>
          <div className={styles.box}>
            <h1>15+</h1>
            <p>Something</p>
          </div>
          <div className={styles.box}>
            <h1>100</h1>
            <p>Something</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src='/about.svg' alt='' fill className={styles.img} />
      </div>
    </div>
  )
}

export default About