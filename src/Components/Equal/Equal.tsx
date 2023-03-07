import {FC} from 'react'
import { Button, ButtonColors, Buttonsizes } from '../Button/Button'
import styles from './Equal.module.css'


export const Equal:FC = () => {
    return <div className={styles.container}>
        <Button size={Buttonsizes.large} color={ButtonColors.blue}>=</Button>
    </div>
}