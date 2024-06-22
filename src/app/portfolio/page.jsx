import styles from './portfolio.module.css'
import Image from 'next/image'
import postImg from '../../../public/aboutImg.jpg'

const items = [
    {
        id: 0,
        img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: 1,
        img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: 2,
        img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: 3,
        img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: 4,
        img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: 5,
        img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
]

const Portfolio =  () => {
  return (
    <div className={`container ${styles.portfolio}`}>
        <div className={styles.row}>
            <h4 className={styles.subtitle}>Subtitle goes here </h4>
            <h1 className={styles.title}>portfolio</h1>
        </div>
        <div className={`${styles.container}`}>
            {items.map((item) => (
                <div className={styles.post} key={item.id}>
                    <div className={styles.top}>
                        <div className={styles.imgContainer}>
                            <Image src={postImg} alt='' fill className={styles.postImg} />
                        </div>
                
                    </div>
                    <div className={styles.bottom}>
                        <p>
                            {item.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Portfolio