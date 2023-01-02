import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import ViewFilesForm from "./ViewFilesForm";

import logo from '../../assets/logo.jpg'
import CreateWordcloud from "./Wordcloud";

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
                <ViewFilesForm
                    SubmitForm = {SubmitForm}
                />
                <div className="wordcloud">
                    <CreateWordcloud
                        status = {status}
                        image = {image}
                    />
                </div>
            </header>
        </div>    
    )
}

export default FrontPage