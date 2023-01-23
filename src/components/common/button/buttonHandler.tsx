import React, {FC} from 'react';
import style from './buttonHandler.module.css'

interface IProps {
    title: string
    handle: () => void
}

export const ButtonHandler: FC<IProps> = ({title, handle}) => {
    return (
        <>
            <button className={style.button} onClick={handle}>{title}</button>
        </>
    )
}