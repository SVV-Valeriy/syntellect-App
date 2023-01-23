import React, {FC} from 'react';
import {Input} from "../../common/input/input";
import {ButtonHandler} from "../../common/button/buttonHandler";
import style from '../control.module.css'

export interface IProps {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    leftButton?: {
        title: string;
        handle: () => void
    }[];
    rightButtons?: {
        title: string;
        handle: () => void
    }[];
}

export const ControlButton: FC<IProps> = ({value, handleChange, leftButton, rightButtons}) => {
    return (
        <>
            <div className={style.control}>
                {leftButton?.map(({title, handle}) => (
                    <ButtonHandler key={title} title={title} handle={handle}/>
                ))}
                <Input value={value} handleChange={handleChange}/>
                {rightButtons?.map(({title, handle}) => (
                    <ButtonHandler key={title} title={title} handle={handle}/>
                ))}
            </div>
        </>
    )
}