import { useState } from 'react'
import Navigation from './Navigation';
import './css/style.css';
import { AuthProvider } from './contexts/AuthContext';
import { CookiesProvider } from 'react-cookie';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from './redux/store';
import { Provider } from 'react-redux'

function App() {

  return (
    <>

    <Provider store={store}>
      <CookiesProvider>
        <AuthProvider>  
          <Navigation/>
          <ToastContainer/>
        </AuthProvider>
      </CookiesProvider>
    </Provider>
    </>
  )
}

export default App
