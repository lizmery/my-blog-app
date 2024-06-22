import Image from 'next/image'
import styles from './services.module.css'
import Link from 'next/link'
import { Scissors, Palette, Component } from 'lucide-react'

const Services = () => {
  return (
    <div className={styles.servicesSection}>
      <div className={`container ${styles.servicesWrapper}`}>
        <div className={styles.row}>
          <h4 className={styles.subtitle}>Subtitle goes here </h4>
          <h1 className={styles.title}>our services</h1>
        </div>
       
        <div className={styles.boxes}>
          <div className={` ${styles.box} ${styles.box1}`}>
            <Scissors className={styles.icon} />
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <Link href='/contact' className={styles.link}>Contact</Link>
          </div>
          <div className={` ${styles.box} ${styles.box2}`}>
            <Palette className={styles.icon} />
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <Link href='/contact' className={styles.link}>Contact</Link>
          </div>
          <div className={` ${styles.box} ${styles.box3}`}>
            <Component className={styles.icon} />
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <Link href='/contact' className={styles.link}>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services