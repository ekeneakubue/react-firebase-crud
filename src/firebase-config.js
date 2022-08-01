// Import the function responsible for connection from the SDKs you need
import { initializeApp } from "firebase/app";
// import getFirestore
import {getFirestore} from '@firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzIgpvbKQy6rzdCXELDi5eYGE_jUQSRsM",
    authDomain: "crud-190f7.firebaseapp.com",
    projectId: "crud-190f7",
    storageBucket: "crud-190f7.appspot.com",
    messagingSenderId: "392848766105",
    appId: "1:392848766105:web:b2ca76aec3f2b34eaf7408",
    measurementId: "G-NK1JBZ92WG"
  };

// Initialize Firebase  
const app = initializeApp(firebaseConfig);

//get fireStoore 
export const db = getFirestore(app);