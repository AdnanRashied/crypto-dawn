import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import  CryptoList  from "../../interface/JSON/cryptoList.json";
import './cryptoCurrencyCard.styles.css';
import React from "react";

const Item = styled(Paper)(({ theme })  => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#525c7f' : '#525c7f',
    borderRadius: 12,
    textAlign: 'left',
    color:'white',
    borderBottom: '1px solid rgba( 255, 255, 255, 0.18 )',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
}));
const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#495376',
    ...theme.typography.body2,
    padding: theme.spacing(10),
    alignContent:'center',
    textAlign: 'center',
    alignItems: 'center',
    border: '1px solid rgba( 255, 255, 255, 0.18 )',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    color:'white'
}));
const Item3 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#3c4669',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    alignContent:'center',
    textAlign: 'center',
    alignItems: 'center'
}));

export const CryptoCurrencyCard = ( props: { input: string; } ) => {
    const searchIndex = props.input;
    const searchTiles = CryptoList.filter((element) => {
        if (searchIndex === ''){
            return null;
        }
        else {
            return element.title.toLowerCase().includes(props.input)  ||
                   element.symbol.toLowerCase().includes(props.input)
        }
    });
    return (
      <Grid sx={{flowGrow:1}} container spacing={1}>
          <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={3}>
                  {searchTiles.map((coin) => (
                      <Grid key={coin.key} item>
                          <Paper
                              sx={{
                                  height: 390,
                                  width: 280,
                                  background: "rgba(64,74,109,0.65)",
                                  borderColor: "#FFFFFF",
                                  borderRadius: 3,
                                  boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                                  border: '1px solid rgba( 255, 255, 255, 0.18 )',
                                  padding:0.5
                              }}>
                              <Stack
                                  spacing={3}
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="center"
                              >
                              <Item>
                                <div className="itemWrap">
                                    <div className="item-block-left">
                                          <img className="iconTitle"
                                               src={coin.imageUrl}
                                               alt="imageIcon"
                                               width={50}
                                          />
                                            <figcaption
                                                className="coin-title">
                                                {coin.title}
                                            </figcaption>
                                    </div>
                                        <div className="item-block-right">
                                            <p className="price">
                                                $20,000
                                            </p>
                                        </div>
                                </div>
                            </Item>
                                    <Item2>
                                        Graphs MetaData
                                    </Item2>
                                  <Item3>
                                      Button List
                                  </Item3>
                              </Stack>
                          </Paper>
                      </Grid>
                  ))}
              </Grid>
          </Grid>
      </Grid>
  )  
};
