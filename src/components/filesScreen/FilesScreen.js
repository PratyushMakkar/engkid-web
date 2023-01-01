import React from "react";
import NavigationBar from "../index/NavigationBar";

import '../css/FileScreen.css'
import logo from '../../assets/logo.jpg'
import FileCard from "./FileCard";

import {DeleteFile, FileModel} from "../../api/userService";

class FilesScreen extends React.Component {
    constructor(props) {
        super(props)
        
        this.username = localStorage.getItem('username')
        this.password = localStorage.getItem('password')

        this.state = {
            FilesArray: [
                new FileModel("72dbwd", "Pratyush Makkar", "Logo.jpg", "https:///"),
                new FileModel("72dbw", "Pratyush Makkar", "Logo.jpg", "https:///")
            ]
        }
        this.onDelete = this.onDelete.bind(this)
        this.onDownload= this.onDownload.bind(this)
    }
    
    onDelete(file) {
        var _FilesArray = this.state.FilesArray

        var filtered = _FilesArray.filter(
            (_file, index, arr) => {
                if (_file.id == file.id) {
                    return false
                } return true
            }
        )

        let client_response = window.confirm(`Would you like to delete the file: ${file.fileName}?`)
        try {
            const response = DeleteFile(file)
            if (client_response && response) {
                this.setState({
                    ['FilesArray']: filtered
                })
                window.alert(`The file: ${file.fileName} was deleted`)
            }
        } catch (error) {
            window.alert(`The file: ${file.fileName} could not be deleted`)
        }
        
    }

    onDownload(file) {
        this.onDelete(file)
    }

    render() {
        const listItems = this.state.FilesArray.map((file) =>
            (<FileCard className="list-card-container" file = {file} delete_callback = {this.onDelete} download_callback = {this.onDownload}/>)
        );

        return (
            <div>
                <header>
                    <NavigationBar/>
                </header>
                <div className="logo-second-container">
                    <img src={logo} className='logo-second'/>
                </div>
                <div className="file-card-container">
                    {listItems.map((file)=> <th>{file}</th>)}
                </div>
            </div>
        )
    }
}

export default FilesScreen