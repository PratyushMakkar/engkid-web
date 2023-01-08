import React from 'react';
import AppBar from '@mui/material/AppBar';
import {Stack, Box, Typography, Divider, Link} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';

import GitHubIcon from '@mui/icons-material/GitHub';

const ImageURL = "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0b5493894cf60b300587_full_logo_white_RGB.svg"

function DiscordAppBar() {
  return (
  <AppBar style={{height:'60px', backgroundColor:"#36393f"}}>
    <Stack sx={{width:'100%', height:"100%"}} direction="row">
      <Box sx={{height:"100%", width:'30%'}} style={{ borderRadius: '6px'}}>
        <Stack sx={{height:"100%", width:'100%'}} direction="row">
          <Link colour="inherit" href='/'>
            <Box sx={{mr:1, ml:2}}>
              <Typography sx={{height:"100%"}} component="div" color="#ffffff">
                <Box sx={{fontSize: 14, fontWeight:'bold', fontStyle: 'oswald'}}>
                    Discorgraf
                </Box>
              </Typography>
            </Box>
          </Link>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ml:2, height:"100%"}}>
            <a href='https://github.com/PratyushMakkar/EngKidBackend'>
              <GitHubIcon sx={{mt:1.8}} style={{color: '#fffff0', fontSize: '175%' }}></GitHubIcon>
            </a>
          </Box>
          <Box sx={{ml:2}}><a href="https://discord.gg/WVTAwK7F">
            <img height = {20} width={100} src={ImageURL}></img></a>
          </Box>
        </Stack>
      </Box>
      <Box sx={{width:'70%', height:'100%'}} style={{borderRadius: '6px'}}/>
    </Stack>
  </AppBar>
  )
}

export default DiscordAppBar