import {FC} from 'react'
import styles from './Holst.module.css' 
import { Switch } from '../Switch/Switch'

export  const Holst:FC  = () => {
    return <div className={styles.obertka}>
        <Switch/>
        <div className={styles.container}>
            <img className={styles.icon} src="/icons/holst.svg" alt="Holst" />
            <p className={styles.firsttext}>Перетащите сюда</p>
            <p className={styles.secondtext}>любой элемент из левой панели</p>
        </div>
    </div>
}
