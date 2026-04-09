import React, { useState } from 'react';
import logo from '../assets/bookmyglow_logo.png'
import { useAuth } from '../contexts/AuthContext';
import {toast} from 'react-toastify'

const LoginPage = () => {

    const {registerUser}= useAuth()
    const [email,setEmail]=useState("")
    const [password,setPassword]= useState("")
    const [confirmPassword,setConfirmPassword]= useState("")
    const [name,setName]= useState("")
    const [phone,setPhone]= useState("")
    const [signInToggle,setSigninToggle]= useState(true)

    function handleEmail(e){
        setEmail(e.target.value)
    }
    function handleName(e){
        setName(e.target.value)
    }
    function handlePhone(e){
        setPhone(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }
    function handleConfirmPassword(e){
        setConfirmPassword(e.target.value)
    }

    function toggleLoginToRegistration(e){
        e.preventDefault()
        setSigninToggle(!signInToggle)
    }

    function handleLogin(e){
        console.log("email=",email)
        console.log("password=",password)
    }

    function resetUserFields(){
        setName("")
        setEmail("")
        setPhone("")
        setPassword("")
        setConfirmPassword("")
    }
    async function handleRegistration(e){
        
        let userData={
            "name":name,
            "email":email,
            "password":password,
            "role":"Customer",
            "phone":phone
        }
        
        if(validateUserData()){

           const response= await registerUser(userData)
           if(response){
                resetUserFields()
           }
        }
        
    }
    function validateUserData(){
        if(name === "" || email== "" || password == "" || confirmPassword == "" || password == "") {
            toast.error("all fields must be filled")
            return false
        }

        let emailRegex= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/

        if(!emailRegex.test(email)) {
            toast.error("email validation failed")
            return false;
        }

        let phoneRegex= /^\+[0-9]{2}[0-9]{10}$/

        if(!phoneRegex.test(phone)) {
            toast.error("please enter phone number with country code and give space after it")
            return false
        }
        
        let passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_.-])[a-zA-Z0-9!@#$%^&*._+=-]{8,}$/

        if(!passwordRegex.test(password)){
            toast.error("Password needs to have atleast 1 lowercase, 1 Uppercase, 1 Special Character, 1 number and must be 8 characters long")
            return false
        }
        if(!passwordRegex.test(confirmPassword)){
            toast.error("Confirm Password needs to have atleast 1 lowercase, 1 Uppercase, 1 Special Character, 1 number and must be 8 characters long")
            return false
        }
        if(password != confirmPassword){
            toast.error("password and confirm password do not match")
            return false;
        }

        

        

        return true;
    }

    return(
        <>
            <div className='login-pg'>
                    <section className='login-card'>
                        <div>
                            <img src={logo} width="260" height="200" alt='logo'/>
                        </div>
                        {/* Use For Login */}
                      
                      {signInToggle?(
                        <div>

                            <div className='input-form'> 
                                <div className='input-field' >
                                    <input id='email' type='text' value={email}
                                    onChange={handleEmail} required="required"/>
                                    <label for="email">Email</label>
                                </div>  
                                <div className='input-field' >
                                    <input id='password'  type='password' value={password} onChange={handlePassword} required="required" />
                                    <label for="password">Password</label>
                                </div>
                                
                            </div>
                            <div style={{width:'100%'}}>
                                <button className='btn btn-secondary' style={{width:'100%'}} onClick={handleLogin}> Submit</button>
                            </div>
                            <div className='d-flex justify-content-between align-items-center mt-4' style={{width:'100%',gap:'10px'}}>
                                <a href="" style={{color:'yellow'}}>fogot Password?</a>
                                <a href='' onClick={toggleLoginToRegistration}>New user? Sign Up here</a>
                            </div>
                        </div>


                      ):(  
                          <div>
                          {/* use for Registration */}
                            <div className='input-form'> 
                                 <div className='input-field' >
                                    <input id='name' type='text' value={name}
                                    onChange={handleName} required="required"/>
                                    <label for="name">Full Name</label>
                                </div>   
                                 <div className='input-field' >
                                    <input id='email' type='text' value={email}
                                    onChange={handleEmail} required="required"/>
                                    <label for="email">Email</label>
                                </div>   
                                <div className='input-field' >
                                    <input id='phone' type='text' value={phone}
                                    onChange={handlePhone} required="required"/>
                                    <label for="phone">Phone</label>
                                </div>   
                                <div className='input-field' >
                                    <input id='password'  type='password' value={password} onChange={handlePassword} required="required" />
                                    <label for="password">Password</label>
                                </div>
                                <div className='input-field' >
                                    <input id='confirmPassword'  type='password' value={confirmPassword} onChange={handleConfirmPassword} required="required" />
                                    <label for="confirmPassword">Confirm Password</label>
                                </div>
                                
                            </div>
                            <div style={{width:'100%'}}>
                                <button className='btn btn-secondary' style={{width:'100%'}} onClick={handleRegistration}> Submit</button>
                            </div>
                            <div className='d-flex justify-content-between align-items-center mt-4' style={{width:'100%',gap:'10px'}}>
                                <a href='' onClick={toggleLoginToRegistration}>Already have an account? Login here</a>
                            </div>
                        </div>)}
                        
                        
                         
                    </section>
            </div>
        </>
    )
};

export default LoginPage;