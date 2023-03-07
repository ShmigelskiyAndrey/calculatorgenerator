import {FC} from 'react'
import { Button } from '../Button/Button'
import styles from './Operants.module.css'

export const Operants:FC = () => {
    return <div className={styles.container}>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>0</Button>
        <Button>,</Button>
    </div>
}