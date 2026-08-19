import React, { useState,useEffect } from 'react';
import logo from '../assets/logos/bookmyglow_logo.png'
import { useAuth } from '../contexts/AuthContext';
import {toast} from 'react-toastify'
import Loader from '../components/Loader';
import EyeOpen from '../assets/icons/vision.png'
import EyeClose from '../assets/icons/hide.png'
import { useNavigate } from 'react-router';

const LoginPage = () => {

    const {registerUser,loginUser}= useAuth()
    const [email,setEmail]=useState("")
    const [password,setPassword]= useState("")
    const [confirmPassword,setConfirmPassword]= useState("")
    const [name,setName]= useState("")
    const [phone,setPhone]= useState("")
    const [eyeToggle,setEyeToggle]= useState(true)
    const [eyeToggleConfirm,setEyeToggleConfirm]= useState(true)
    const [signInToggle,setSigninToggle]= useState(true)
    const navigate=useNavigate()
    

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
    function handleCountryCode(e){
        setCountryCode(e.target.value)
    }

    function toggleLoginToRegistration(e){
        e.preventDefault()
        setSigninToggle(!signInToggle)
    }
    function toggleEyeToggle(e){
        e.preventDefault()
        setEyeToggle(!eyeToggle)
    }
    function toggleEyeToggleConfirm(e){
        e.preventDefault()
        setEyeToggleConfirm(!eyeToggleConfirm)
    }

    async function handleLogin(){
        console.log("email=",email)
        console.log("password=",password)

         let loginData={
            "email":email,
            "password":password,
        }
        if(validateUserData()){

           const response= await loginUser(loginData)
           if(response){
                resetUserFields()
                navigate("/")
           }
        }
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

            console.log("user data= ",userData)
            const response= await registerUser(userData)
            console.log("user data response= ",response)
            if(response){
                resetUserFields()
                navigate("/")
            }
        }
        
    }
    function validateUserData(){

        let emailRegex= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/
        let phoneRegex= /^[0-9]{10}$/
        
        let passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_.-])[a-zA-Z0-9!@#$%^&*._+=-]{8,}$/
        console.log("signIn toggle= ", signInToggle)
        if(signInToggle){

            if(email== "" || password == "" ) {
                toast.error("all fields must be filled")
                return false
            }
            if(!passwordRegex.test(password)){
                toast.error("Password needs to have atleast 1 lowercase, 1 Uppercase, 1 Special Character, 1 number and must be 8 characters long")
                return false
            }
        }
        else{

            if(name === "" || email== "" || password == "" || confirmPassword == "" ||phone == "") {
                toast.error("all fields must be filled")
                return false
            }
           
            if(!emailRegex.test(email)) {
                toast.error("email validation failed")
                return false;
            }

            if(!phoneRegex.test(phone)) {
                toast.error("please enter phone number with country code and give space after it")
                return false
            }
            
            if(!passwordRegex.test(password)){
                toast.error("Password needs to have atleast 1 lowercase, 1 Uppercase, 1 Special Character, 1 number and must be 8 characters long")
                return false
            }
           
            if(password != confirmPassword){
                toast.error("Password and confirm password do not match")
                return false;
            }
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
                                    <input id='password'  type={eyeToggle?'password':'text'} value={password} onChange={handlePassword} required="required" />
                                    <label for="password">Password</label>
                                    {eyeToggle? <img className='eye-style' src={EyeClose} onClick={toggleEyeToggle}/> : <img className='eye-style' src={EyeOpen} onClick={toggleEyeToggle}/>}
                                    
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
                                <div className='input-field phone-wrapper' >
                                    <span className='country-iso'> +91</span>
                                    <input id='phone' type='tel' pattern="[0-9]{10}" maxLength={10} inputMode='numeric' value={phone} 
                                    onChange={handlePhone} required="required"/>
                                    
                                    <label className='ms-4 p-1' for="phone">Phone</label>
                                </div>   
                                <div className='input-field' >
                                    <input id='password'  type={eyeToggle?'password':'text'} value={password} onChange={handlePassword} required="required" />
                                    <label for="password">Password</label>
                                    {eyeToggle? <img className='eye-style' src={EyeClose} onClick={toggleEyeToggle}/> : <img className='eye-style' src={EyeOpen} onClick={toggleEyeToggle}/>}
                                    
                                </div>
                                <div className='input-field' >
                                    <input id='confirmPassword' type={eyeToggleConfirm?'password':'text'} value={confirmPassword} onChange={handleConfirmPassword} required="required" />
                                    <label for="confirmPassword">Confirm Password</label>
                                    {eyeToggleConfirm? <img className='eye-style' src={EyeClose} onClick={toggleEyeToggleConfirm}/> : <img className='eye-style' src={EyeOpen} onClick={toggleEyeToggleConfirm}/>}

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