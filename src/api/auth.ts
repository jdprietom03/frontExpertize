import axios from "axios";
import { getCookie, setCookie } from "./cookie";

const NO_AUTH = 401;
const BAD_REQUEST = 400;

export const login = (data:any):Promise<any>  => {
    return axios.post('http://34.29.188.95:80/login', data, 
    {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        }
    }
    )
    .then(response => {
        const data = JSON.stringify(response.data)
        setCookie("user", data, response.data.expires_in)
        return response.data
    })
        .catch(error => {
            let errorMessage  = "";
            
            if(NO_AUTH == error.response.status) {
                errorMessage = "Invalid credentials"    
            } else if(BAD_REQUEST == error.response.status) {
                errorMessage = "Fill empty fields"
            }
           
            return Promise.reject(errorMessage)
            
        });
}

export const changePassword = (data:any):Promise<any>  => {
    const userData = JSON.parse(getCookie("user") || "{}")
    const { token, id } = userData
    data.id = id;
    
    return axios.post('http://34.29.188.95:80/user/change_password', data, 
    {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    )
    .then(response => { 
        return response;
    })
        .catch(error => {
            let errorMessage  = "";
            
            if(NO_AUTH == error.response.status) {
                errorMessage = "Invalid credentials"    
            } else if(BAD_REQUEST == error.response.status) {
                errorMessage = "Fill empty fields"
            }
           
            return Promise.reject(errorMessage)
            
        });
}