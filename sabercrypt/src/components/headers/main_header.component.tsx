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
import { ContainedButton } from "../buttons/main_header_buttons.styles";
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
                                <ContainedButton href="crypto">Crypto</ContainedButton>
                                <ContainedButton href="market">Market</ContainedButton>
                            </Stack>
                        </div>
                    </Toolbar>
                </AppBar>

            </>
            ):(

                <AppBar className="appbar_mobile" position={"sticky"}>
                    <Toolbar className="toolbar_mobile">
                        <figure className="item">
                        <img src={SaberCircle}
                             className="mainHeaderSvg_mobile"
                             alt="mainHeaderSvg"
                             width={80}
                        />
                        <figcaption className="title_mobile">
                            <h2>SaberCrypt</h2>
                        </figcaption>
                        </figure>
                    </Toolbar>
                </AppBar>
            )}
        </div>
)};

export default MainHeader;
