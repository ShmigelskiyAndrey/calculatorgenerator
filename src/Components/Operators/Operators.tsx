import {FC, useState} from 'react'
import { Button } from '../Button/Button'
import styles from './Operators.module.css' 
import { useDrag,  } from 'react-dnd/dist/hooks'
import cn from 'classnames';


type Props={
    disable?: boolean;
    border?: boolean;
}

export const Operators:FC<Props> = ({disable, border}) => {

    const [candrag, setCandrag] = useState(true)

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "div",
        item: <Operators/>,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
        end: (item, monitor) => {
            if (monitor.didDrop()) {
                setCandrag(false);
            }
        },
        canDrag: candrag && !disable,
    }),[candrag]);

    const classes = cn(styles.container, candrag === false && styles.disable, border && styles.border)

    return <div ref={drag}  className={classes}>
        <Button>/</Button>
        <Button>X</Button>
        <Button>—</Button>
        <Button>+</Button>
    </div>
}