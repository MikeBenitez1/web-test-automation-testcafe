//File with data constants and dotenv consumer
import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    VALID_DATA:{
        VALID_USERNAME: process.env.VALID_USERNAME,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_DATA:{
        INVALID_USERNAME: process.env.INVALID_USERNAME
    }

}