import {FC, ReactElement, ReactNode, useState, cloneElement} from 'react'
import styles from './Holst.module.css' 
import { Switch } from '../Switch/Switch'
import { Zaglushka } from '../Zaglushka/Zaglushka'
import { useDrop } from 'react-dnd'



export  const Holst:FC  = () => {

    const [holst, setHolst] = useState<ReactNode[]>([])

    const [, dropRef] = useDrop(() => ({
        accept: "div",
        drop: (item: ReactNode, monitor) => {
            setHolst((holst) => [...holst, item]);
        },
        collect: (data) => ({
            
        })
    }));

    const [state, setState] = useState(true);


    return <div className={styles.obertka}>

        <Switch onChange={(status)=> setState(status)}/>
        
        <div ref={dropRef} className={styles.container}>  
        
            {holst.length === 0 ? <Zaglushka/> : holst.map((item, i) =>{
                const El = cloneElement(item as ReactElement, { key: i, disable: true, border: true, constructor: state});
                return El;
            })}
        </div>
    </div>
}
