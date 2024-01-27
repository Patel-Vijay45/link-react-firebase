// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  signOut, 
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"; 
const firebaseConfig = {
  apiKey: "AIzaSyBlimq5s2rDUG6Z2J1IEQCKKRUzponMRWg",
  authDomain: "react-firebase-link.firebaseapp.com",
  projectId: "react-firebase-link",
  storageBucket: "react-firebase-link.appspot.com",
  messagingSenderId: "932265015069",
  appId: "1:932265015069:web:4fa525af1bf513c4ca13f4",
  measurementId: "G-0ZEXYJFBWQ",
};

// Initialize Firebase
export const  firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp); 
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const uesrSnapShot = await getDoc(userDocRef);

  if (!uesrSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error:- " + error.message);
    }
  }
  return userDocRef;
};

export const signOutGoogle = () => {
  signOut(auth)
    .then(() => { 
    })
    .catch((error) => {});
};
export const getCurrentUser = () => {
  return auth.currentUser;
};
   