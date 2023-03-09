import {FC} from 'react'
import styles from './Switch.module.css' 

export  const Switch:FC  = () => {

    // const runtimeactivate = () => {
    //     let elem1 = document.getElementById("constructor");
    //     let elem2
    //     elem1.classList.remove("selected");
    //     elem2.classList.add("selected");
    // }

    return <div className={styles.container}>
        <button id="runtime"  className={styles.button}> <img src="/icons/eye.svg" alt="Runtime" /> Runtime</button>
        <button id="constructor" className={styles.selected}> <img src="/icons/selector.svg" alt="Constructor" /> Constructor</button>
    </div>
}
