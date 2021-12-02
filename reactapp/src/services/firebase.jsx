import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "@firebase/auth";
import { async } from "@firebase/util";

const firebaseConfig = {
  apiKey: "AIzaSyDL5DLCFSBdMFdI9BqFOSpncOmowQ69Wks",
  authDomain: "reactapp-6d956.firebaseapp.com",
  projectId: "reactapp-6d956",
  storageBucket: "reactapp-6d956.appspot.com",
  messagingSenderId: "415311143479",
  appId: "1:415311143479:web:91d30211bcec1b837fd5b2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const signUp = async(email, password) => 
    await createUserWithEmailAndPassword(auth, email, password)

export const logIn = async(email, password) => 
    await signInWithEmailAndPassword(auth, email, password)

export const logOut = async() => await signOut(auth)