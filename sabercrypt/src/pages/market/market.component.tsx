import React, { useState } from 'react';
import { CryptoCurrencyCard } from '../../components/cards/cryptoCurrencyCard.component';
import './market.styles.css'

export default function Market() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (event: { target: { value: any; }; }) => {
        let lowerCase = event.target.value;
        setInputText(lowerCase.toLowerCase());
    };
    return (
        <>
        <div className="search-field">
            <input
                type="search"
                className="search-bar"
                onChange={inputHandler}
                placeholder="Search Cryptocurrency.."
            />
        </div>
        <div className="x">
            <CryptoCurrencyCard input={inputText}/>
        </div>
            </>

    );
}
