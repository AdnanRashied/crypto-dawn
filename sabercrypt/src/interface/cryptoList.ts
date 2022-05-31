export interface CryptoListProps {
    cryptoSelection: {
        title: string;
        subtitle:string;
        imageUrl:string;
        key:number;
    }[]
}

const cryptoList = {
    cryptoSelection:[
        {
            title: "Bitcoin",
            subtitle:"Store of Value",
            imageUrl:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/btc.svg",
            key:1
        },
        {
            title: "Etherium",
            subtitle:"Decentralized Application",
            imageUrl:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/eth.svg",
            key:2
        },
        {
            title: "Solana",
            subtitle:"Fastpace Dapps",
            imageUrl:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/sol.svg",
            key:3
        },
        {
            title: "Cardano",
            subtitle:"Haskell Based Currency",
            imageUrl:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/ada.svg",
            key:4
        },
        {
            title: "Cosmic",
            subtitle:"Interoperability Crypto",
            imageUrl:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/atom.svg",
            key:5
        },
        {
            title: "Polygon",
            subtitle:"Layer 2 Scaling",
            imageUrl:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/matic.svg",
            key:7
        },
        {
            title: "Chainlink",
            subtitle:"Blockchain Oracles",
            imageUrl:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/link.svg",
            key:8
        },
        {
            title: "AAVE",
            subtitle:"Lending Protocol",
            imageUrl:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/aave.svg",
            key:9
        },
        {
            title: "Tron",
            subtitle:"Decentralize Network",
            imageUrl:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/trx.svg",
            key:10
        },
    ]
};

export default cryptoList;
