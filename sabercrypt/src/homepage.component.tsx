import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { CryptoCurrencyCard } from '../src/components/cards/cryptoCurrencyCard.component';

import './homepage.styles.css'

export default function Homepage() {
    const [ inputText, setInputText ] = useState("");
    let inputHandler = (event: { target: { value: any; }; }) => {
        let lowerCase = event.target.value;
        setInputText(lowerCase.toLowerCase());
    };
    return (
        <div>
             <div className="searchDiv">
                <TextField
                    size="small"
                    type="search"
                    label="Search"
                    variant="standard"
                    className="searchField"
                    onChange={inputHandler}
                />
        </div>
            <div>
                <CryptoCurrencyCard input={inputText}/>
            </div>
        </div>
    );
}
