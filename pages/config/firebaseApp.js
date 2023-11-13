import firebase from 'firebase/compat/app';
//import 'firebase/auth';
//import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

import { firebaseConfig } from './firebaseApp.config.js'


//if (!firebase.apps.length) {
//    firebase.initializeApp(firebaseConfig)
//}
firebase.initializeApp(firebaseConfig);

//export const db = getFirestore(firebase);

export const auth = getAuth();

//export const auth = firebase.auth();

export {firebase}
