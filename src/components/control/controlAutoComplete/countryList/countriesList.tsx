import React, {FC} from 'react';
import style from './countriesList.module.css'

interface IProps {
    name: string
    fullName: string
    flag: string
    targetValue: (a: string) => void
}

export const CountriesList: FC<IProps> = ({name, fullName, flag, targetValue}) => {

    const handler = () => {
        targetValue(`${name}, ${fullName}`)
    }

    return (
        <ul className={style.countriesList} key={name}>
            <li onClick={handler} className={style.county}>
                <p className={style.name}>{name},</p>
                <p className={style.name}>{fullName}</p>
                <img alt={name} src={flag}/>
            </li>
        </ul>
    )
}
