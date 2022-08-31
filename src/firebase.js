import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    // Populate your firebase conf data here
    apiKey: "AIzaSyANpe9m_nlZUSCM_-7-RVDKtvonHJlRgVk",
    authDomain: "vuefire-autoform.firebaseapp.com",
    projectId: "vuefire-autoform",
    storageBucket: "vuefire-autoform.appspot.com",
    messagingSenderId: "211485878056",
    appId: "1:211485878056:web:e9a53133c09a2a9a67521d",
    measurementId: "G-BD79Z8EBT1"
});

const db = firebaseApp.firestore();

export {db}