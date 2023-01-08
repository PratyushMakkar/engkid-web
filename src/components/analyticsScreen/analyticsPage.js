import Carousel from "nuka-carousel/lib/carousel";
import React from "react";
import TitlePage from './titlePage'

import {Stack, Box} from '@mui/system'
import '../css/analyticsPageCSS.css'
import FinalPage from "./finalPage";
import DiscordMessagePage from "./DiscordMessagePage";
import DiscordAppBar from "../AppBar";

function CreateAnalyticsPage({AnalyticsData}) {
  return (<Box id="AnalyticsPage">
    <header>
        <DiscordAppBar/>
    </header>
    <div id="carousel">
      <Carousel>
        <DiscordMessagePage text={<TitlePage/>}/>
        <DiscordMessagePage
          text={<Box sx={{maxWidth: 450, fontStyle: 'Uni Sans', m: 1 }}>
                here is some text   here is some text here is some text here is some text here is some text  
          </Box>}/>
        <DiscordMessagePage text={<FinalPage/>}/>
      </Carousel>
    </div>
  </Box>)
}

export default CreateAnalyticsPage