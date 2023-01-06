import React from "react";
import { Card, CardMedia, Typography} from '@mui/material';
import {Stack, Box} from '@mui/system'

import data_svg from '../../assets/data-management-icon.png'

function FinalPageRefactor() {
  return <div className="caraousel-page">
    <div className="Container">
      <Card>
        <Stack justifyContent="center" alignItems="center" direction="row" spacing={2}>
            <Box sx={{mb:2, mt:2 ,ml: 2}}><img src={data_svg} id="data_svg"/></Box>
            <Typography component="div">
              <Box sx={{fontWeight: "bold", fontSize: 'h6.fontSize', m: 1 }}>It seems that is the end of it!</Box>
              <Box sx={{m: 1 }}>We are constantly finding new ways to visualize and present message data in novel ways. Visit us soon for additional features!</Box>
              <Box sx={{textTransform: 'uppercase', fontWeight: "bold", fontSize: 'h6.fontSize', m: 1 }}>Until next time!</Box>
            </Typography>
        </Stack>
      </Card>
    </div>
  </div>
} 

function FinalPage() {
  return (<div>
    <Box sx={{fontWeight: "bold", fontSize: 'h6.fontSize', m: 1 }}>It seems that is the end of it!</Box>
    <Box sx={{m: 1 }}>We are constantly finding new ways to visualize and present message data in novel ways. Visit us soon for additional features!</Box>
    <Box sx={{textTransform: 'uppercase', fontWeight: "bold", fontSize: 'h6.fontSize', m: 1 }}>Until next time!</Box>
  </div>)
}

export default FinalPage