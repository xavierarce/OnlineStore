//* Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

//!We need to conect the initialzed app with our app
const firebaseConfig = {
  apiKey: "AIzaSyDvTQqFzQ_gqGFSkCwqeyF6L6f8762pQV8",
  authDomain: "coolstore-abad4.firebaseapp.com",
  projectId: "coolstore-abad4",
  storageBucket: "coolstore-abad4.appspot.com",
  messagingSenderId: "21760772428",
  appId: "1:21760772428:web:483932cf8c0a7ffc2de7e9",
};

//* Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


// ! initialized Google AUTH
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  //Takes config
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return; //Protect code

  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth; //Get data from userAuth
    const createdAt = new Date(); // New Date Object

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error creating this User", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password);
};

export const singInEmailandPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
