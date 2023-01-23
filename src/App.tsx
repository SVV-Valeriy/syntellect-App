import React, {useState} from "react";
import style from './app.module.css'
import {ControlButton} from "./components/control/controlWithButtons/controlButton";
import {ControlAutocomplete} from "./components/control/controlAutoComplete/controlAutocomplete";

export const App = () => {
    const [valueFirst, setValueFirst] = useState('')
    const handleChangeFirst = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueFirst(event.target.value)
    }
    const clearInput = () => {
        setValueFirst('')
    }

    const helloInput = () => {
        setValueFirst('Hello world!')
    }

    const [valueSecond, setValueSecond] = useState('')
    const handleChangeSecond = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueSecond(event.target.value)
    }

    const isNumeric = (n: string) => !!Number(n)

    const numberCheck = () => {
        if (isNumeric(valueSecond)) {
            alert(valueSecond)
        } else alert('Введите число')
    }

    const alertInput = () => {
        alert(valueSecond)
    }

    return (
        <div className={style.container}>
            <h2>Контрол с кнопками</h2>
            <ControlButton value={valueFirst} handleChange={handleChangeFirst} rightButtons={[
                {title: 'clear', handle: clearInput},
                {title: 'Hello', handle: helloInput},
            ]}/>
            <ControlButton value={valueSecond} handleChange={handleChangeSecond}
                           leftButton={[{title: 'number', handle: numberCheck}]}
                           rightButtons={[{title: 'alert', handle: alertInput}]}/>
            <h2>Контрол-автокомплит</h2>
            <div className={style.controlAuto}>
            <ControlAutocomplete size={3}/>
            <ControlAutocomplete size={10}/>
            </div>
        </div>
    )
}
