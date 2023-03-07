import {FC} from 'react'
import styles from './Output.module.css' 

export const Output:FC = () => {
    return <div className={styles.container}>
        <div className={styles.output}>0</div>
    </div>
}