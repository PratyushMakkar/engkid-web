import {ZippedAPIException} from "../api/zippedAPIException"


export class FileModel {
    constructor(id, sender, fileName, url ) {
        this.id = id
        this.sender = sender
        this.fileName = fileName
        this.url = url
    }

    static DeseralizeFileFromJSON(json) {
        return new FileModel(
            json['id'],
            json['ownder'],
            json['name'],
            json['url'],
        )
    }
}
const SERVER_URL = process.env.REACT_APP_SERVER_URL

export async function CreateUser(_username, _password) {
    const object = {username: _username, password: _password}
    try {
        const url = `${SERVER_URL}/user/`
        var response = fetch(url, {
        redirect: 'follow',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(object)
    })
    } catch (error) {
        throw ZippedAPIException("Error occured while attempting to request the object", 500);
    }

    if ((await response).status===405){
        throw ZippedAPIException("The user already exists in the database", 405);
    }
    return response.json()
}

export async function UserExists(username, password) {
    return
}

export async function ReturnUserFiles(_username, _password) {
    const url = `${SERVER_URL}/user/recievedFiles/`
    const object = {username: _username, password: _password}

    var request = {
        redirect: 'follow',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(object)
    }

    try {
        var filesArray = []
        var response = fetch(url, request).then((response) => {response.json()})
                    .then((data)=> {
                        for (const file of data.recievedFiles) {
                            filesArray.push(
                                FileModel.DeseralizeFileFromJSON(file)
                            )
                        }
                    })
    } catch (error) {
        console.log(error)
        throw new ZippedAPIException("Error occured while attempting to request the object", 500);
    } 
    if ((await response).status===404) {
        throw new ZippedAPIException("The user or files could not be found.", 404);
    }
    return filesArray
}

export async function DeleteFile(file) {
    return "Hello World"
}

