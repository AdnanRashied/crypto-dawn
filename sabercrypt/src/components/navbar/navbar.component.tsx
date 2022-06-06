/*
    navbar.component serves the web application header only.
    isMobile handles at theme.breakpoints.up-md
*/
import React from 'react';
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles'
import { TopNavButton, BottomNavButton } from
        "../buttons/main_navbar_buttons.styles";

import "./navbar.styles.css";
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
                         width={35}
                    />
                    <div className="title">
                        <h2>SaberCrypt</h2>
                    </div>
                    <div className="button_stack">
                        <Stack spacing={2} direction="row">
                            <TopNavButton href="market">Market</TopNavButton>
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
                            <BottomNavButton href="crypto">Crypto</BottomNavButton>
                            <BottomNavButton href="market">Market</BottomNavButton>
                            <BottomNavButton href="market">Art</BottomNavButton>
                            <BottomNavButton href="market">Omega</BottomNavButton>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </div>
        )}
    </div>
)};

export default MainHeader;
