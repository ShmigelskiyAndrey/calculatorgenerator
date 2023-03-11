import {FC, useState} from 'react'
import { Button, ButtonColors, Buttonsizes } from '../Button/Button'
import styles from './Equal.module.css'
import { useDrag } from 'react-dnd/dist/hooks'
import cn from 'classnames';


type Props={
    disable?: boolean;
    border?: boolean;
}


export const Equal:FC<Props> = ({disable, border}) => {

    const [candrag, setCandrag] = useState(true)

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "div",
        item: <Equal/>,
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

    const classes = cn(styles.container, candrag === false && styles.notable, border && styles.border)

    return <div ref={drag} className={classes}>
        <Button size={Buttonsizes.large} color={ButtonColors.blue}>=</Button>
    </div>
} 