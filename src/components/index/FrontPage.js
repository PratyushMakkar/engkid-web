import React, { useState } from "react";
import NavigationBar from "./NavigationBar";

import axios from 'axios';

import SignInPage from "../loginPage";


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
            <header className="FrontPage">
                <NavigationBar/>
                <img height = {50} width={500} src={ImageURL}></img>
                <div height={500}>
                    <SignInPage SubmitForm={SubmitForm}/>
                </div>
                
            </header>
        </div>    
    )
}

export default FrontPage