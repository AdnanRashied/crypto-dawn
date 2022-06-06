import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { CryptoCurrencyCard } from '../../components/cards/cryptoCurrencyCard.component';

import './market.styles.css'

export default function Homepage() {
    const [ inputText, setInputText ] = useState("");
    let inputHandler = (event: { target: { value: any; }; }) => {
        let lowerCase = event.target.value;
        setInputText(lowerCase.toLowerCase());
    };
    return (
        <div>
             <div className="searchDiv">
                <input
                    type="search"
                    className="searchField"
                    placeholder="Search Cryptocurrency.."
                    onChange={inputHandler}
                />
                <Button
                    className="showAll"
                    variant="contained"
                >
                    Show me all coins
                </Button>
        </div>
            <div>
                <CryptoCurrencyCard input={inputText}/>
            </div>
        </div>
    );
}
