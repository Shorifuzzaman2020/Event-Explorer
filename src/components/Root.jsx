
import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import { UserProvider, useUser } from '../UserContext'; 
import { auth } from '../firebase.init'; 
import { onAuthStateChanged } from 'firebase/auth'; 

const Root = () => {
  const { setUser } = useUser(); 

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
       
        setUser(user);
      } else {
        
        setUser(null); 
      }
    });

    return () => unsubscribe();
  }, [setUser]);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};


const RootWrapper = () => {
  return (
    <UserProvider>
      <Root />
    </UserProvider>
  );
};

export default RootWrapper;
//WORKING CODE