import {FC, SyntheticEvent, useState} from 'react'
import styles from './Switch.module.css' 
import cn from 'classnames';

type Props = {
    onChange?: (status: boolean) => void;
}

export  const Switch:FC<Props>  = ({onChange}) => {
const [state, setState] = useState(true)


    const onTogle = (status: boolean) => {
        if(onChange){
            onChange(status);
            setState(status);
        }
    }

    const btn1 = cn(styles.button, state === false && styles.selected)
    const btn2 = cn(styles.button, state === true && styles.selected)

    return <div className={styles.container}>
        <button id="runtime" onClick={() => onTogle(false)} className={btn1}> <img src="/icons/eye.svg" alt="Runtime" /> Runtime</button>
        <button id="constructor" onClick={() => onTogle(true)} className={btn2}> <img src="/icons/selector.svg" alt="Constructor" /> Constructor</button>
    </div>
}
