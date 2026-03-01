import { useState } from 'react'
import Navigation from './Navigation';
import './css/style.css';
import { AuthProvider } from './contexts/AuthContext';


function App() {

  return (
    <>
    <AuthProvider>
      <Navigation/>
    </AuthProvider>
    </>
  )
}

export default App
