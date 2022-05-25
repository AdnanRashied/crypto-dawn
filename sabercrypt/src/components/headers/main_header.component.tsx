/*
    main_header.component serves the web application header only.
*/
import React from 'react';
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import styled from "@mui/material/styles/styled";
import { ContainedButton } from "../buttons/main_header_buttons.styles";
import SaberCircle from "../../assets/SaberCircle.png"
import "./main_header.styles.css";

const MainHeader = () => {
    return (
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
    )
};

export default MainHeader;
