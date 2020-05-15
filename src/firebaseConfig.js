import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyB3TpjND15IXtY4oV4-7FQTJRfOpjsLrpc",
    authDomain: "portfolio-4ad8b.firebaseapp.com",
    databaseURL: "https://portfolio-4ad8b.firebaseio.com",
    projectId: "portfolio-4ad8b",
    storageBucket: "",
    messagingSenderId: "601043154557",
    appId: "1:601043154557:web:ecbf44661588f267202314"
};


firebase.initializeApp(config);

export const db = firebase.firestore();

export default firebase;