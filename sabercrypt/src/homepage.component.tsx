import * as React from 'react';
import { CryptoCurrencyCard } from '../src/components/cards/cryptoCurrencyCard.component'
import cryptoList from "./interface/cryptoList";

export default function SpacingGrid() {
    return (
        <CryptoCurrencyCard cryptoSelection={cryptoList.cryptoSelection}/>
    );
}