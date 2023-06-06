import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDXARIgXI91vPNLNPFVeRguz2KyZSFkWHg",
    authDomain: "restaraunt-julia.firebaseapp.com",
    projectId: "restaraunt-julia",
    storageBucket: "restaraunt-julia.appspot.com",
    messagingSenderId: "1018531441157",
    appId: "1:1018531441157:web:9ad282fdc53ca5911fca6c"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)
export const db = getFirestore(app);