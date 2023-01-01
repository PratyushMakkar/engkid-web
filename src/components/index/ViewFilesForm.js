import React, { useState } from "react";
import {CreateUser} from "../../api/userService";

import {
    CDBInput,
    CDBCard,
    CDBCardBody,
    CDBIcon,
    CDBBtn,
    CDBLink,
    CDBContainer } from 'cdbreact';

import '../css/ViewFilesForm.css'
import { ZippedAPIException } from "../../api/zippedAPIException";

function ViewFilesForm({SubmitForm})  {
    const [wordcloudID, SetWordcloudID] = useState('')
    const [status, SetStatus] = useState('empty')

    async function handleSubmit(e) {
        e.preventDefault();
        SetStatus('submitting')
        const result = await SubmitForm(wordcloudID)
        SetStatus('typing')
    }

    function handleTextAreaChange(e) {
        SetWordcloudID(e.target.value);
    }

    return (
        <div className="ViewFileForm">
            <form onSubmit= {handleSubmit}>
                 <div>
                    <input className="Input-button"
                        disabled = {status==='submitting'}
                        onChange={handleTextAreaChange}
                        value={wordcloudID}
                        name="username"
                        placeholder= "WORDCLOUD ID" 
                    />
                    <button disabled = {wordcloudID.length===0} className = "ViewFilesButton" type="submit">SUBMIT</button>
                </div>
            </form>
        </div>
    );
}

export default ViewFilesForm 