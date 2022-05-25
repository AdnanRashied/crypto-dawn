/*
    main_header.component serves the web application header only.
    isMobile handles at theme.breakpoints.up-md
*/
import React from 'react';
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles'
import { TopHeaderButton, BottomHeaderButton } from "../buttons/main_header_buttons.styles";
import "./main_header.styles.css";

import SaberCircle from "../../assets/SaberCircle.png"

const MainHeader = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.up("sm"));
    return (
        <div>
            {isMobile ? (<>
                <AppBar>
                    <Toolbar className="toolbar">
                        <img src={SaberCircle}
                             className="mainHeaderSvg"
                             alt="mainHeaderSvg"
                             width={80}
                        />
                        <div className="title">
                            <h2>SaberCrypt</h2>
                        </div>
                        <div className="button_stack">
                            <Stack spacing={2} direction="row">
                                <TopHeaderButton href="crypto">Crypto</TopHeaderButton>
                                <TopHeaderButton href="market">Market</TopHeaderButton>
                            </Stack>
                        </div>
                    </Toolbar>
                </AppBar>

            </>
            ):(
                <div className="main_div_mobile">
                        <figure className="item">
                        <img src={SaberCircle}
                             className="mainHeaderSvg_mobile"
                             alt="mainHeaderSvg"
                             width={80}
                        />
                        <figcaption className="title_mobile">
                            <h2>SaberCrypt</h2>
                            <h3>Trade, Stake, Options, Arbitrage </h3>
                            <h5>Welcome to the New era of Finances </h5>
                         </figcaption>
                    </figure>
                    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                        <Toolbar className="toolbar_mobile_under">
                            <Stack spacing={3} direction="row">
                                <BottomHeaderButton href="crypto">Crypto</BottomHeaderButton>
                                <BottomHeaderButton href="market">Market</BottomHeaderButton>
                                <BottomHeaderButton href="market">Art</BottomHeaderButton>
                                <BottomHeaderButton href="market">Omega</BottomHeaderButton>
                            </Stack>
                        </Toolbar>
                    </AppBar>
                </div>
            )}
        </div>
)};

export default MainHeader;
