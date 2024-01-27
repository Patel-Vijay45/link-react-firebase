
 
import './assets/css/core.css';
import 'boxicons';
import Routes from './routes';
import { AuthProvider } from './context/AuthContext';
import { auth } from './utils/firebase/firebase.utils';
import { useEffect, useState } from 'react';
 

const App =()=>{
  const [user, setUser] = useState(null);

   
  return (
    <AuthProvider>
      <Routes/>

    </AuthProvider>
  )
}

export default App;
