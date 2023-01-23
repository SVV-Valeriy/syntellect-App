import React, {FC, useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {CountryInfo} from '../../../store/country'
import {Input} from "../../common/input/input";
import {CountriesList} from "./countryList/countriesList";
import style from "../control.module.css";
import {StoreContext} from "../../../store/store.context";
import {useDebounce} from "../../hooks";

interface IProps {
    size: number
}

export const ControlAutocomplete: FC<IProps> = observer(({size}) => {
        const [value, setValue] = useState('')
        const {countryStore} = useContext(StoreContext)
        const [countries, setCountries] = useState<CountryInfo[]>([])
        const {fetchCountry} = countryStore

        const showCountries = useDebounce(
            async (value: string, size?: number) => {
                const countries = await fetchCountry(value, size)
                setCountries(countries)
            }
        )

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value)
            showCountries(event.target.value, size)
        }

        const targetValue = (str: string) => {
            setValue(str)
            showCountries(str, size)
        }

        const countriesElement = countries.map(c => {
            return <CountriesList key={c.name} name={c.name} fullName={c.fullName} flag={c.flag} targetValue={targetValue}/>
        })

        return (
            <>
                <div className={style.control}>
                    <Input value={value} handleChange={handleChange}/>
                </div>
                {countriesElement}
            </>
        )
    }
)

