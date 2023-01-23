import React, {FC} from 'react';
import style from './input.module.css'

interface IProps {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<IProps> = ({value, handleChange}) => {
    return (
        <>
            <input className={style.input} value={value} onChange={handleChange}/>
        </>
    )
}