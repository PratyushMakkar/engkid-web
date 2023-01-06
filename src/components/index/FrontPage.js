import React, { useState } from "react";

import axios from 'axios';

import SignInPage from "../loginPage";
import InformationRow from "./InformationBox";
import DiscordScreen from '../discordScreen';

import '../css/FrontPage.css'

import {Stack, Box} from '@mui/system'
import OpenSourceBox from "./OpenSourceBox";
const {API_URL} = require('../../config.json')

const ImageURL = "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0b5061df290f5892d944_full_logo_black_RGB.svg"

function FrontPage() {
    const [wordcloudID, SetWordcloudID] = useState('')
    const [status, SetStatus] = useState('')
    const [image, SetNetworkStatus] = useState('error')

    async function SubmitForm(wordcloudID) {
        try {
            let result = await axios.get(API_URL + 'wordcloud/'+ wordcloudID)
            return result
        } catch(error) {
            return 0
        }
    }

    return(
        <div>
            <Stack id="DiscordSignIn">
                <Stack height={500}>
                    <img height = {50} width={500} src={ImageURL}></img>
                    <SignInPage SubmitForm={SubmitForm}/>
                </Stack>
                <InformationRow/>
                <OpenSourceBox/>
                <Box sx={{mt:15, backgroundColor: '#36393f', width:'100%', height: 75}}/>
            </Stack>
        </div>    
    )
}

export default FrontPage