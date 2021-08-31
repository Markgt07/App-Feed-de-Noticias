import * as firebase from 'firebase';
import 'firebase/firestore'

 
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyChSPNyPWo2WoB1IGikEju-33xCJkTluXQ",
    authDomain: "feednoticias-9c512.firebaseapp.com",
    projectId: "feednoticias-9c512",
    storageBucket: "feednoticias-9c512.appspot.com",
    messagingSenderId: "1096113922430",
    appId: "1:1096113922430:web:8475506ea6876155c1132f"

});

const db = firebase.firestore();

export {db};