import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import ViewFilesForm from "./ViewFilesForm";

import logo from '../../assets/logo.jpg'
import CreateWordcloud from "./Wordcloud";
import SignInPage from "../loginPage";
import FrontPageWordcloud from "../FontPageWordcloud";


const ImageURL = "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0b5061df290f5892d944_full_logo_black_RGB.svg"

function FrontPage() {
    const [wordcloudID, SetWordcloudID] = useState('')
    const [status, SetStatus] = useState('')
    const [image, SetNetworkStatus] = useState('error')

    async function SubmitForm(wordcloudID) {
       //console.log('Submtted form' + wordcloudID)
    }

    return(
        <div>
            <header className="FrontPage">
                <NavigationBar/>
                <img height = {50} width={500} src={ImageURL}></img>
                <SignInPage/>
            </header>
        </div>    
    )
}

export default FrontPage