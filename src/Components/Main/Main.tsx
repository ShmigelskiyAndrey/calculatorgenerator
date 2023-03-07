import {FC} from 'react'
import styles from './Main.module.css' 
import { Palitra } from '../Palitra/Palitra';
import { Holst } from '../Holst/Holst';

export  const Main:FC  = () => {
    return <div className={styles.container}>
    <Palitra/>
    <Holst/>
  </div>
}