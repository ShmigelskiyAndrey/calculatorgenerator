import {FC, useState} from 'react'
import styles from './Output.module.css' 
import { useDrag } from 'react-dnd/dist/hooks'
import cn from 'classnames';


type Props={
    disable?: boolean;
    border?: boolean;
}


export const Output:FC<Props> = ({disable, border}) => {

    const [candrag, setCandrag] = useState(true)

    const [, drag] = useDrag(() => ({
        type: "div",
        item: <Output/>,
        collect: (monitor) => ({
           
        }),
        end: (item, monitor) => {
            if (monitor.didDrop()) {
                setCandrag(false);
            }
        },
        canDrag: candrag && !disable,
    }),[candrag]);

    const classes = cn(styles.container, candrag === false && styles.notable, border && styles.border)
    return <div ref={drag} className={classes}>
        <div className={styles.output}>0</div>
    </div>
}

