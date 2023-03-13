import {FC, useState} from 'react'
import { Button } from '../Button/Button'
import styles from './Operants.module.css'
import { useDrag } from 'react-dnd/dist/hooks'
import cn from 'classnames';


type Props={
    disable?: boolean;
    border?: boolean;
}

export const Operants:FC<Props> = ({disable, border}) => {

    const [candrag, setCandrag] = useState(true)

    const [, drag] = useDrag(() => ({
        type: "div",
        item: <Operants/>,
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