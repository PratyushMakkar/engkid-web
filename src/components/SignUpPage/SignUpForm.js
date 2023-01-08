import React, { useState } from "react";
import {Stack, Box} from '@mui/system'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Card, CardMedia, Typography, Divider, Button , Snackbar, TextField} from '@mui/material';

function SignupForm({HandleClick}) {

  function handleClick() {
    HandleClick(true)
  }

  return <Box sx={{ml:5, mt:4, width:"60%", maxWidth:"20", height:"75%"}} style={{}}>
    <Stack sx={{mt:2,mb:2, width: "100%"}}>
        <Typography sx={{mb:2.0, mr:2}} component="div" color="#FFFFFF">
              <Box sx={{mb:0.4, width:"80%", fontSize: 18, fontWeight:'bold', fontStyle: 'Sans-Serif'}}>
                  Sign Up
              </Box>
              <Box sx={{fontSize: 12, fontWeight:'normal', fontStyle: 'Sans-Serif'}}>
                  Create a wordcloud ID using your Discord user and server ID
              </Box>
        </Typography>
      <TextField sx={{input: {height: 20, background: "#FFFFFF"}, mb:2, height:"4"}} size="small" id="outlined-basic" variant="outlined" label="User ID"/>
      <TextField sx={{input: {height: 20, background: "#FFFFFF"}, mb:3}} size="small" variant="outlined" label="Server ID"/>
      <Button onClick={handleClick} sx={{
        '&:hover': {
          bgcolor: '#202225', 
          color: '#FFFFFF',
        },
        width:"100%"
      }} style={{backgroundColor:"#202225", color:'#FFFFFF'}} variant="contained">Sign Up</Button>
    </Stack>
  </Box>
}

export default SignupForm