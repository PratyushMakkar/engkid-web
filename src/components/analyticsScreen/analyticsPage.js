import Carousel from "nuka-carousel/lib/carousel";
import React from "react";
import NavigationBar from "../index/NavigationBar";
import TitlePage from './titlePage'

import '../css/analyticsPageCSS.css'
import FinalPage from "./finalPage";
import DiscordMessagePage from "./wordFrequencyPage";

function CreateAnalyticsPage({AnalyticsData}) {
  return (<div id="AnalyticsPage">
    <header>
        <NavigationBar/>
    </header>
    <div id="carousel">
      <Carousel>
        <TitlePage userId={14}/>
        <DiscordMessagePage/>
        <FinalPage/>
      </Carousel>
    </div>
  </div>)
}

export default CreateAnalyticsPage