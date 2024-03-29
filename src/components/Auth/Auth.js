import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { signIn } from '../../store/userSlice';
import { redirect, useNavigate } from 'react-router-dom';

const Auth = () => {
    const[SIGNUP,signUpHandler]=useState(false);
    const Email=useRef();
    const Password=useRef();
    const confirmPassword=useRef();
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const modeHandler=()=>{
        signUpHandler((value)=>{
           return  !value;
        })
    }
    
    function submitHandler(event){
        event.preventDefault();
        // console.log(Email.current.value);
        // console.log(Password.current.value);
        // console.log(confirmPassword.current.value);
        let url;
        if(!SIGNUP){
            console.log('This was signup brother')
            url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA5RN-mdzd6eXVuQjEbnWNgOh95OHYjYGU';
           

        }else{
            console.log('Sign in brother')
            url=`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA5RN-mdzd6eXVuQjEbnWNgOh95OHYjYGU`;
            
        }

        const signUpHandler=async()=>{

            const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: Email.current.value,
                password: Password.current.value,
                returnSecureToken: true
            })
        });

        if (!response.ok) {
            throw new Error('Signup was not successful');
        }
        const data=await response.json();
        console.log(data);
        // setIdToken(data.idToken);
        dispatch(signIn({
            email:data.email,
            idToken:data.idToken
        }));
        localStorage.setItem( 'auth',JSON.stringify({
            email:data.email,
            idToken:data.idToken
        }))
        navigate('/')
        }
        signUpHandler();
        console.log('Hi this one is okkkkkkk')
        console.log('kyo hi this one')
    }
  return <>
 
    <div className="container mt-5">
    <div className="row justify-content-center">
        <div className="col-md-4 border border-1 rounded ">
            <h3 className='text-center '>{SIGNUP?'Sign_IN':'Sign_Up'}</h3>
        <form onSubmit={submitHandler} >
                <div className="form-group m-4 ">
                    <input ref={Email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                </div>

                <div className="form-group m-4">
                    <input ref={Password} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                </div>

                {!SIGNUP &&
                    <div className="form-group m-4">
                        <input ref={confirmPassword} type="password" className="form-control" id="confirmPasword" placeholder="Confirm Password" required/>
                    </div>
                }


                <div className="form-group m-4">
                     <button type="submit" style={{width:'100%'}} className="btn btn-primary btn-block rounded-4 ">{SIGNUP?'Login':'SignUP'}</button>
                     <button type='button' onClick={modeHandler} style={{width:'100%'}} className="btn btn-primary btn-block rounded-4 mt-2">{SIGNUP?'Go To SignUP':'Go To Login'}</button>
                </div>

            </form>
            <div className="mt-3">
            <p className='text-center'>
                Don't have an account? 
                <a href="/signup">Sign up here</a>
            </p>
          </div>
        </div>
    </div>
    </div>
</>
}

export default Auth