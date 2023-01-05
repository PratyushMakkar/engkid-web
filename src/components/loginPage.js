import React from 'react'
import { Link } from 'react-router-dom'

import '../components/css/App.css'
import NavigationBar from './index/NavigationBar'

export default function SignInPage() {
    return (
      <div>
        <div className="text-center m-5-auto">
            <h2>Sign in with your wordcloudID</h2>
            <form action="/home">
                <p>
                    <label>Wordcloud ID</label>
                    <Link to="/forget-password"><label className="right-label">Forget your ID?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" className='log-in-button'>Login</button>
                </p>
            </form>
            <footer>
                <p>Unsure? <Link to="/register">Create a wordcloud ID to access data!</Link>.</p>
            </footer>
        </div>
      </div>
    )
}