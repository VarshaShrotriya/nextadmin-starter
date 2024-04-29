import React from 'react'
import Image from 'next/image'
import styles from './rightbar.module.css'
import {MdPlayCircleFilled} from 'react-icons/md'
import {MdReadMore} from 'react-icons/md'
const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
            <Image src="/pet1.webp" alt="" className={styles.bg} fill/>
        </div>
        <div className={styles.text}>
            <span className={styles.notification}>
                Available Now
            </span>
            <h3 className={styles.title}>Murphy says, "Love is a four-legged hug! Adopt your cuddle companion today."</h3>
            <button className={styles.button}>
              <MdPlayCircleFilled/>
              Watch
            </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
            <span className={styles.notification}>
                Coming Soon
            </span>
            <h3 className={styles.title}>Murphy's not just an app, it's a love connection.
              Find your Murphy moment. Adopt, love, and be loved.</h3>
            <button className={styles.button}>
              <MdReadMore/>
            Learn
            </button>
        </div>
      </div>
    </div>
  )
}

export default Rightbar