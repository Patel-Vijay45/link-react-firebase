
 
import './assets/css/core.css';
import 'boxicons';
import Routes from './routes';
import { AuthProvider } from './context/AuthContext'; 
import { useEffect, useState } from 'react';
 

const App =()=>{ 
  return (
    <AuthProvider>
      <Routes/>

    </AuthProvider>
  )
}

export default App;
