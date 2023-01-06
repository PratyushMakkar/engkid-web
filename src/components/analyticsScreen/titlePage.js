import React from "react";
import { Card, CardMedia, Typography} from '@mui/material';
import {Stack, Box} from '@mui/system'

const ImageURL = "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0b5061df290f5892d944_full_logo_black_RGB.svg"

function TitlePage({userID}) {
  return <div className="caraousel-page">
    <div className="Container">
      <Card>
        <Stack justifyContent="center" alignItems="center" direction="row" spacing={2}>
            <Box sx={{ ml: 2}}><img height = {50} width={250} src={ImageURL}></img></Box>
            <Typography component="div">
              <Box sx={{fontWeight: "bold", fontSize: 'h6.fontSize', m: 1 }}>Welcome!</Box>
              <Box sx={{fontWeight: "bold", fontSize: 'h6.fontSize', m: 1 }}>Presenting your Discord Message Recap, made possible by the UW-Eng Bot!</Box>
              <Box sx={{m: 1 }}>Use the previous and next buttons to navigate through the website</Box>
            </Typography>
        </Stack>
      </Card>
    </div>
  </div>
} 

export default TitlePage