import React, {useState}from 'react'
import { Link } from 'react-router-dom'

import '../components/css/App.css'

export default function SignInPage({SubmitForm}) {
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
        <div className="text-center m-5-auto">
            <h2>Sign in with your wordcloudID</h2>
            <form onSubmit= {handleSubmit} action="/home">
                <p>
                    <label>Wordcloud ID</label>
                    <Link to="/signup"><label className="right-label">Forget your ID?</label></Link>
                    <br/>
                    <input disabled = {status==='submitting'}
                        onChange={handleTextAreaChange}
                        value={wordcloudID}
                        type="password" 
                        name="password"
                        required 
                      />
                </p>
                <p>
                    <button id="sub_btn" type="submit" disabled = {wordcloudID.length===0} lassName='log-in-button'>Login</button>
                </p>
            </form>
            <footer>
                <p>Unsure? <Link to="/signup">Create a wordcloud ID to access data!</Link>.</p>
            </footer>
        </div>
    )
}