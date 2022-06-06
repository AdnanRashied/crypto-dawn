import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { CryptoCurrencyCard } from '../../components/cards/cryptoCurrencyCard.component';
import SearchBar from '../../components/cards/search';
import './market.styles.css'
import {Box, Grid, Paper, styled} from "@mui/material";
import events from "node:events";
import AppBar from "@mui/material/AppBar";

export default function Market() {

    const [inputText, setInputText] = useState("");
    let inputHandler = (event: { target: { value: any; }; }) => {
        let lowerCase = event.target.value;
        setInputText(lowerCase.toLowerCase());
    };
    return (
        <>
        <div className="s">
            <input
                type="search"
                className="searchField"
                placeholder="Search Cryptocurrency.."
                onChange={inputHandler}
            />
        </div>
        <div className="x">
            <CryptoCurrencyCard input={inputText}/>
        </div>
            </>

    );
}
