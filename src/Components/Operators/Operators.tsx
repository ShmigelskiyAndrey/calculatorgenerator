import {FC} from 'react'
import { Button } from '../Button/Button'
import styles from './Operators.module.css' 

export const Operators:FC = () => {
    return <div className={styles.container}>
        <Button>/</Button>
        <Button>X</Button>
        <Button>—</Button>
        <Button>+</Button>
    </div>
}