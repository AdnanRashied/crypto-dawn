import React, { useState } from 'react';
import Button from "@mui/material/Button";
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
                        placeholder="Search CryptoCurrency.."
                    />
                <div>
                    <Button variant="contained"
                            sx={{
                                padding:1.5,
                                borderRadius:10,
                                margin:3
                            }}>
                        Show all coins
                    </Button>
                </div>
            </div>

            <div className="cards">
                <CryptoCurrencyCard input={inputText}/>
            </div>
        </>
    );
}
