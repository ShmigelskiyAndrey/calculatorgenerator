import {FC} from 'react'
import styles from './Switch.module.css' 

export  const Switch:FC  = () => {
    return <div className={styles.container}>
        <button className={styles.selected}> <img src="/icons/eye.svg" alt="Runtime" /> Runtime</button>
        <button className={styles.button}> <img src="/icons/selector.svg" alt="Constructor" /> Constructor</button>
    </div>
}
