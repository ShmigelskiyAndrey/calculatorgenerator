import {FC} from 'react'
import styles from './Zaglushka.module.css' 

export  const Zaglushka:FC  = () => {
    return <div className={styles.container}>
        <img className={styles.icon} src="/icons/holst.svg" alt="Holst" />
            <p className={styles.firsttext}>Перетащите сюда</p>
            <p className={styles.secondtext}>любой элемент из левой панели</p>
    </div>
}