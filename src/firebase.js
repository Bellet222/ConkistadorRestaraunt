import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "api-key",
    authDomain: "restaraunt-julia.firebaseapp.com",
    projectId: "restaraunt-julia",
    storageBucket: "restaraunt-julia.appspot.com",
    messagingSenderId: "id",
    appId: "api=id"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)
export const db = getFirestore(app);
