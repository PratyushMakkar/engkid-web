import React from "react";
import { Card, CardMedia, Typography, Divider, Paper} from '@mui/material';
import {Stack, Box} from '@mui/system'
import GitHubIcon from '@mui/icons-material/GitHub';

function DiscordScreen() {
  return (<Box sx={{width:'525px', height:'300px'}}>
      <Card sx={{width:'100%', height:'100%'}} elevation={4} style={{ borderRadius: '6px', backgroundColor: "#36393f"}}>
        <Stack direction="row">
          <Box sx={{width:'25%', height:'300px'}} style={{ borderRadius: '6px', backgroundColor: "#202225"}}></Box>
          <Box sx={{width:'75%', height:'300px'}} style={{ borderRadius: '6px'}}>
            <Box>
              <GitHubIcon sx={{mt:10, ml:12}} style={{color: '#fffff0', fontSize: '900%' }}></GitHubIcon>
            </Box>
          </Box>
        </Stack>
      </Card>
    </Box>)
}

export default DiscordScreen