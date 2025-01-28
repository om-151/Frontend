import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: 'AIzaSyB5mq8Jx0Va7D5TlRxpc9cXxY6i_B0sSzM',
    authDomain: 'humayoo-55cda.firebaseapp.com',
    projectId: 'humayoo-55cda',
    storageBucket: 'humayoo-55cda.firebasestorage.app',
    messagingSenderId: '201708774727',
    appId: '1:201708774727:web:494660cc1dfddbd7871862',
    measurementId: 'G-VQFYWZE4W1'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
