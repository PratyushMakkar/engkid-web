import Carousel from "nuka-carousel/lib/carousel";
import React from "react";
import NavigationBar from "../index/NavigationBar";
import TitlePage from './titlePage'

import {Stack, Box} from '@mui/system'
import '../css/analyticsPageCSS.css'
import FinalPage from "./finalPage";
import DiscordMessagePage from "./DiscordMessagePage";

function CreateAnalyticsPage({AnalyticsData}) {
  return (<Box id="AnalyticsPage">
    <header>
        <NavigationBar/>
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