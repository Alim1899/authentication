import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {getAuth} from 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: "AIzaSyDM_ceooX__qbBH1Mi6__m934tPMrqYwVc",
  authDomain: "authentication-3f929.firebaseapp.com",
  projectId: "authentication-3f929",
  storageBucket: "authentication-3f929.appspot.com",
  messagingSenderId: "459126881824",
  appId: "1:459126881824:web:8e8c7d6bec8fc21038c645"
});
export const auth = getAuth();
export default app;


