import { redirect } from "react-router-dom";

export function rootReturn(){
    const token=JSON.parse(localStorage.getItem('auth'));
    console.log(token)
    if(!token || !token.idToken ){

       return  redirect('/auth')
    }
    return null;
}