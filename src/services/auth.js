import axios from 'axios';

import * as c from '../constant/Endpoint';

export async function createPin(data){
    try{
        let res = await axios.post(c.CREATE_PIN , data);
        return res.data;
    }catch(e){
        throw handler(e);
    }
}

export async function changePin(data){
    try{
        let res = await axios.post(c.CHANGE_PIN, data);
    }catch(e){
        throw handler(e);
    }
}
export async function searchUser(username){
    try{
        let res = await axios.get(`${c.SEARCH_USER}/${username}`);
        return res.data;
    }catch(e){
        throw handler(e);
    }
}
export async function getProfile(){
    try{
        let res = await axios.get(c.PROFILE);
        return res.data.user;
    }catch(e){
        throw handler(e);
    }
}

export async function transaksi(data){
    try{
        let res = await axios.post(c.TRANSAKSI_BALANCE , data);
        return res.data;
    }catch(e){
        throw handler(e);
    }

}

export async function pay(data){
    console.log(data)
    try {
        let res = await axios.post(c.PAY_MERCHANT , data);
        console.log(res.data)
        return res.data;
    }catch(e){
        throw handler(e);
    }
}
export async function getSaldo(){
    try{
        let res = await axios.get(c.CEK_SALDO);
        return res.data;
    }catch(e){
        throw handler(e);
    }
}
export async function getHistory(){
    try{
        let res = await axios.get(c.HISTORY);
        return res.data;
    }catch(e){
        throw handler(e);
    }
}
export async function register(data){
    try{
        let res = await axios.post(c.REGISTER, data);

        return res.data;
    }catch (e) {
        throw handler(e)
    }
}

export async function login(data){
    try{
        let res = await axios.post(c.LOGIN, data);
        return res.data;
    }catch (e) {
        throw handler(e);
    }
}

export async function forgotPassword(data) {
    try {
        let res = await axios.post(c.FORGOT_PASSWORD, data);

        return res.data;
    } catch (e) {
        throw handler(e);
    }
}

export async function updateProfile(userId, data){
    try{
        const options = {
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data"
            }
        };

        const form_data = new FormData();
        for ( let key in data )
            form_data.append(key, data[key]);

        let res = await axios.put(`${c.UPDATE_PROFILE}/${userId}`, form_data, options);
        return res.data;
    }catch (e) {
        throw handler(e);
    }
}

export function handler(err) {
    let error = err;
    if (err.response && err.response.data.hasOwnProperty("message")){
        error = err.response.data;
    }
    else if (!err.hasOwnProperty("message")) error = err.toJSON();
   console.log(error.message)
    return new Error(error.message);
}