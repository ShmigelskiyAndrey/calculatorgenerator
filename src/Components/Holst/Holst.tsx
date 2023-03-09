import {FC, useState} from 'react'
import styles from './Holst.module.css' 
import { Switch } from '../Switch/Switch'
import { Zaglushka } from '../Zaglushka/Zaglushka'

export  const Holst:FC  = () => {

    const [myArray, updateMyArray] = useState<string[]>([]);

    const enableDropping = (event: React.DragEvent<HTMLDivElement>) => { 
        event.preventDefault();
    }

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('text');
        console.log(`Somebody dropped an element with id: ${id}`);
        updateMyArray( arr => [...arr, ]);
        console.log(myArray)
    }

    return <div className={styles.obertka}>
        <Switch/>
        <div onDragOver={enableDropping} onDrop={handleDrop} className={styles.container}>
            <Zaglushka/>
        </div>
    </div>
}
