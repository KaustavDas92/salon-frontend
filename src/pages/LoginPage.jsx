import React, { useState } from 'react';
import logo from '../assets/logos/bookmyglow_logo.png'
import { useAuth } from '../contexts/AuthContext';
import {toast} from 'react-toastify'

const LoginPage = () => {

    const {registerUser,loginUser}= useAuth()
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

           const response= await registerUser(userData)
           if(response){
                resetUserFields()
           }
        }
        
    }
    function validateUserData(){

        let emailRegex= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/
        let phoneRegex= /^\+[0-9]{2}[0-9]{10}$/
        
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
            if(!passwordRegex.test(password)){
            toast.error("Password needs to have atleast 1 lowercase, 1 Uppercase, 1 Special Character, 1 number and must be 8 characters long")
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
            if(!passwordRegex.test(confirmPassword)){
                toast.error("Confirm Password needs to have atleast 1 lowercase, 1 Uppercase, 1 Special Character, 1 number and must be 8 characters long")
                return false
            }
            if(password != confirmPassword){
                toast.error("password and confirm password do not match")
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