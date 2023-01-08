import React, { useState } from "react";
import {Stack, Box} from '@mui/system'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Card, CardMedia, Typography, Divider, Paper, Snackbar, TextField} from '@mui/material';

import DiscordAppBar from "../AppBar";

import "./SignUpPage.css"
import SignUpAlert from "./SignUpAlert";
import SignupForm from "./SignUpForm";

const IMAGE_URL = "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0b5493894cf60b300587_full_logo_white_RGB.svg"

function SignUpPage() {
  const [ErrorStatus, SetErrorStatus] = useState(false)

  function HandleClick() {
    SetErrorStatus(true)
    setTimeout(()=> { 
      SetErrorStatus(false)
    }, 6000)
  }

  function HandleCross() {
    SetErrorStatus(false)
  }

  return (
    <div id="signup-page">
      <header>
        <DiscordAppBar/>
      </header>
      <Box id="centre-box" sx={{width:"55%", height:"400px"}}>
        <Card sx={{width:'100%', height:'100%'}} elevation={4} style={{ borderRadius: '6px', backgroundColor: "#36393f"}}>
          <Stack direction="row">
            <Box sx={{width:'20%', height:'400px'}} style={{ borderRadius: '6px', backgroundColor: "#202225"}}></Box>
            <Box sx={{width:'80%', height:'300px'}} style={{ borderRadius: '6px'}}>
              <Stack direction="column">
                <Stack direction="row" sx={{mb:1}}>
                  <Box sx={{width:"50%"}}>
                    <img height = {40} width={300} src={IMAGE_URL}></img>
                  </Box>
                  <Box sx={{width:"55%"}}>
                    <SignupForm HandleClick={HandleClick}/>
                  </Box>
                </Stack>
                <Box sx={{width:"60%", height:"40px"}}>
                  <SignUpAlert isError={ErrorStatus} handleClick={HandleCross}/>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Card>
      </Box>
      <footer>
        <Box sx={{mt:25, backgroundColor: '#202225', width:'100%', height: 75}}/>
      </footer>
    </div>
  )
}

export default SignUpPage