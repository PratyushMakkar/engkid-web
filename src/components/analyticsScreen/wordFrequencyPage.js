import React from "react";
import { Card, CardMedia, Typography, Divider, Paper} from '@mui/material';
import {Stack, Box} from '@mui/system'
import {CardGiftcard, ControlPoint, GifBoxRounded, Mood} from '@mui/icons-material';

const ImageURL = "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0b5061df290f5892d944_full_logo_black_RGB.svg"

function DiscordMessagePage({userID}) {
  return <div className="caraousel-page">
    <div className="Container">
      <Card sx={{mr:3}} elevation={4} style={{ borderRadius: '6px', backgroundColor: "#36393f"}}>
        <Stack justifyContent="center" alignItems="center" direction="row" spacing={2}>
          <Box justifyContent="top" alignItems="top">
            <ControlPoint style={{ color: '#b9bbbe' }}/>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Typography component="div" color="#b9bbbe">
              <Box sx={{maxWidth: 450, fontStyle: 'Uni Sans', m: 1 }}>Use the previous and next 
              Use the previous and next Use the previous and next 
              Use the previous and next fnenfjen fefejnfej
              buttons to navigate through the website</Box>
          </Typography>
          <Box sx={{mr:2}}>
            <Stack direction="row" spacing={1} alignItems="top">
              <CardGiftcard style={{ color: '#b9bbbe' }}/>
              <GifBoxRounded style={{ color: '#b9bbbe' }}/>
              <Mood style={{ color: '#b9bbbe' }}/>
            </Stack>
          </Box>
        </Stack>
      </Card>
    </div>
  </div>
} 

export default DiscordMessagePage