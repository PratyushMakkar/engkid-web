export const STATUS_CODES = {
    404: '404',
    500: '500',
    200: '200'
}

export class ZippedAPIException extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode=statusCode
    }
}