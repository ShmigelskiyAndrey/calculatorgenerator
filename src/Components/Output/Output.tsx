import {FC} from 'react'
import styles from './Output.module.css' 

export const Output:FC = () => {

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        event.dataTransfer.setData('text', event.currentTarget.id);
    }

    return <div id="outout" draggable="true" onDragStart={handleDragStart} className={styles.container}>
        <div className={styles.output}>0</div>
    </div>
}

