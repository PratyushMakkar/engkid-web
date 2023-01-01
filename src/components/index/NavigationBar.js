import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import '../css/ViewFilesForm.css'

import logo from '../../assets/logo.jpg'

class NavigationBar extends React.Component {

    render() {
        return(
            <div className = "frontPage-navbar">
                <div>
                    <a href="/ ">
                        <img src={logo} alt="logo" className='logo-image'/>
                    </a>
                </div>
                <div className='documentation'>
                    <a>
                        <text>Documentation</text>
                    </a>
                </div>
            </div>
        );
    }
} 

export default NavigationBar