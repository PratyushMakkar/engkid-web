import React from 'react';


import '../css/ViewFilesForm.css'

import logo from '../../assets/logo.jpg'

class NavigationBar extends React.Component {

    render() {
        return(
            <div id= "frontPage-navbar">
                <div>
                    <a href="/ ">
                        <img src={logo} alt="logo" id='logo-image'/>
                    </a>
                </div>
                <div >
                    <a id='documentation' href= 'https://github.com/PratyushMakkar/UW_EngKid/tree/dev'>
                        <text id = 'documentation-text'>Documentation</text>
                    </a>
                </div>
            </div>
        );
    }
} 

export default NavigationBar