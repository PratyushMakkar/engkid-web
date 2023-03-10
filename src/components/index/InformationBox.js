import React, { useState } from "react";
import {Stack, Box} from '@mui/system'

import DiscordMessagePage from "../analyticsScreen/DiscordMessagePage";
import { Typography } from "@mui/material";

function InformationRow() {
  return (
    <Box sx={{backgroundColor: '#202225', width:'100%', height: 275}}>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Box sx={{mt:12, height: '100%', width:'50%'}} >
          <DiscordMessagePage
              text={
                <Box sx={{maxWidth: 450, fontStyle: 'Uni Sans', m: 1 }}>
                    To sign up, simply add the Discograf bot into your server. Use your 
                    user and server ID to then analyze your data.   
                </Box>
              }/>
        </Box>
        <Box sx={{mt:8, height: '100%', width:'50%'}} >
          <Typography component="div" color="#ffffff">
            <Box sx={{maxWidth: 450, fontSize: 18, fontWeight:'bold', fontStyle: 'oswald', m: 1 }}>
                Generate insights about your discord data in seconds using wordclouds, sentiment analysis. We continue to
                add more features! 
            </Box>
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}

export default InformationRow