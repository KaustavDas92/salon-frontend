import React, { useState } from 'react';
import logo from '../assets/bookmyglow_logo.png'


const LoginPage = () => {
    const [username,setUsername]=useState()
    const [password,setPassword]= useState()

    function handleUsername(e){
        setUsername(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }

    function handleSubmit(e){
        console.log("username=",username)
        console.log("password=",password)
    }
    return(
        <>
            <div className='login-pg'>
                    <section className='login-card'>
                        <div>
                            <img src={logo} width="260" height="200" alt='logo'/>
                        </div>
                        <div className='input-form'> 
                            <div className='input-field' >
                                <input id='username' type='text' value={username}
                                 onChange={handleUsername} required="required"/>
                                 <label for="username">Username</label>
                            </div>  
                            <div className='input-field' >
                                <input id='password'  type='password' value={password} onChange={handlePassword} required="required" />
                                <label for="password">Password</label>
                            </div>
                            
                        </div>
                        <div style={{width:'100%'}}>
                            <button className='btn btn-secondary' style={{width:'100%'}} onClick={handleSubmit}> Submit</button>
                        </div>
                        <div className='d-flex justify-content-center align-items-center' style={{width:'100%'}}>
                            <a href="" style={{color:'yellow'}}>fogot Password?</a>
                        </div>
                    </section>
            </div>
        </>
    )
};

export default LoginPage;