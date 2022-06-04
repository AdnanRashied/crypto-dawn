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
                    className="searchField"
                    type="search"
                    size="medium"
                    id="outlined-basic"
                    variant="standard"
                    label="Search"
                    onChange={inputHandler}
                />
        </div>
            <div>
                <CryptoCurrencyCard input={inputText}/>
            </div>
        </div>
    );
}
