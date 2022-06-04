import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { CryptoCurrencyCard } from '../src/components/cards/cryptoCurrencyCard.component';

export default function Homepage() {
    const [ inputText, setInputText ] = useState("");
    let inputHandler = (event: { target: { value: any; }; }) => {
        let lowerCase = event.target.value;
        setInputText(lowerCase.toLowerCase());
    };
    return (
        <div>
             <div>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
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
