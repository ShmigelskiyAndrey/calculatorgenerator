import {FC, ReactNode} from 'react'
import styles from './Button.module.css' 
import cn from 'classnames';

export enum ButtonColors{
    default,
    blue
}

export enum Buttonsizes{
    default,
    large
}

type Props={
    color?:ButtonColors;
    size?:Buttonsizes;
    children?:ReactNode;
}

export const Button:FC<Props> = ({color, size, children}) => {
    const classes = cn(styles.btn, color === ButtonColors.blue && styles.blue, size === Buttonsizes.large && styles.large)
    return <button className={classes}><div className={styles.div}>{children}</div></button>
}