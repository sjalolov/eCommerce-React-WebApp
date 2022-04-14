import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

/**https://stackoverflow.com/questions/70445014/module-not-found-error-package-path-is-not-exported-from-package */

/** The above linked helped me to find the Firebase path issue */

const firebaseConfig = {
  apiKey: "AIzaSyA6qVjifQw1yVJJZ_RBMqP52i1K91ovzhk",
  authDomain: "ecommerce-a787d.firebaseapp.com",
  projectId: "ecommerce-a787d",
  storageBucket: "ecommerce-a787d.appspot.com",
  messagingSenderId: "1039986670871",
  appId: "1:1039986670871:web:690fe1ee63e30f49bacb52",
  measurementId: "G-GJWN27CEBH",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export  { db, auth };


