import {FC} from 'react'
import { Output } from '../Output/Output'
import { Operators } from '../Operators/Operators'
import { Operants } from '../Operants/Operants'
import { Equal } from '../Equal/Equal'
import styles from './Palitra.module.css' 

export  const Palitra:FC  = () => {
    return <div className={styles.container}>
        <Output/>
        <Operators/>
        <Operants/>
        <Equal/>
    </div>
}
