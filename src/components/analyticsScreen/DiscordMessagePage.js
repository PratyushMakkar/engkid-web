import React from "react";
import { Card, CardMedia, Typography, Divider, Paper} from '@mui/material';
import {Stack, Box} from '@mui/system'
import {CardGiftcard, ControlPoint, GifBoxRounded, Mood} from '@mui/icons-material';


function DiscordMessagePage({text}) {
  return <div className="caraousel-page">
    <div className="Container">
      <Card sx={{width:"100%", mb:3, mr:3}} elevation={4} style={{ borderRadius: '6px', backgroundColor: "#36393f"}}>
        <Stack sx={{mb:1, mt:1}} justifyContent="center" alignItems="center" direction="row" spacing={2}>
          <Box sx={{height:"100%"}}>
            <ControlPoint style={{ color: '#b9bbbe' }}/>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Typography component="div" color="#b9bbbe">
            <Box sx={{maxWidth: 450}}>
              {text}
            </Box>
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