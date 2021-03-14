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

export const USER_INFO = {
        FIRST_NAME: process.env.FIRST_NAME,
        LAST_NAME: process.env.LAST_NAME,
        POSTAL_CODE: process.env.POSTAL_CODE
}

