import React from "react";
import '../css/FileScreen.css'

class FileCard extends React.Component {
    constructor(props) {
        super(props)
        this.onDelete = this.onDelete.bind(this)
        this.onDownload = this.onDownload.bind(this)
    }

    onDelete() {
        this.props.delete_callback(this.props.file)
    }

    onDownload() {
        this.props.download_callback(this.props.file)
    }

    render() {
        return (
            <div className="file-card">
                <div className='flex-child'>
                    <h5 className="card-text">{this.props.file.fileName}</h5>
                    <h5 className="card-text">From: {this.props.file.sender}</h5>
                </div>
                <div className="button-container">
                    <div className="button-coloumn">
                        <div className="button-box">
                            <button onClick={this.onDownload} className="download-button">Download</button>
                        </div>
                        <div className="button-box">
                            <button onClick={this.onDelete} className="delete-button">Delete</button>   
                        </div> 
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default FileCard