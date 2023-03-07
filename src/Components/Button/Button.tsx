import {FC} from 'react'
import styles from './Button.module.css' 

export const Button:FC = () => {
    return <button className={styles.btn}><div className={styles.div}>0</div></button>
}