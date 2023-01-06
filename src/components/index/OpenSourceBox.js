import React, { useState } from "react";
import {Stack, Box} from '@mui/system'

import DiscordMessagePage from "../analyticsScreen/DiscordMessagePage";
import { Typography } from "@mui/material";
import DiscordScreen from "../discordScreen";

function OpenSourceBox() {
  return (
    <Box sx={{width:'100%', height: 275}}>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Box sx={{ml:6, height: '100%', width:'50%'}} >
            <Typography component="div" color="#202225">
              <Box sx={{maxWidth: 450, fontSize: 25, fontWeight:'bold', fontStyle: 'oswald', m: 1 }}>
                  The project is continuing to expand! To suggest new features or create a few yourself,
                  feel free to take a visit to our repository. 
              </Box>
            </Typography>
        </Box>
        <Box sx={{mt:6, mb:6, height: '100%', width:'50%'}} >
            <DiscordScreen/>
        </Box>
    </Stack>
    </Box>
  )
}

export default OpenSourceBox