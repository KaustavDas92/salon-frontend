import { useState } from 'react'
import Navigation from './Navigation';
import './css/style.css';
import { AuthProvider } from './contexts/AuthContext';
import { CookiesProvider } from 'react-cookie';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>

    <CookiesProvider>
      <AuthProvider>  
        <Navigation/>
        <ToastContainer/>
      </AuthProvider>
    </CookiesProvider>
    </>
  )
}

export default App
