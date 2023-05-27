import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
//   apiKey: "AIzaSyDNeZnel839fXRwkEcMWFI7ZQGt2wEtmmY",
//   authDomain: "sheyhealthy-lite.firebaseapp.com",
//   projectId: "sheyhealthy-lite",
//   storageBucket: "sheyhealthy-lite.appspot.com",
//   messagingSenderId: "1035820909890",
//   appId: "1:1035820909890:web:9bc7beda9301359d7234db",
//   measurementId: "G-TKW0LJ3XRX",

// apiKey: "AIzaSyA764C7WdnjFOiwfh9q9nqstrCqA08gvfU",
//   authDomain: "social-c7db0.firebaseapp.com",
//   projectId: "social-c7db0",
//   storageBucket: "social-c7db0.appspot.com",
//   messagingSenderId: "782857857583",
//   appId: "1:782857857583:web:e080621d0ffb1776d6b4da",
//   measurementId: "G-B2S28WESDV"




apiKey: "AIzaSyBeuDqtel2Vhwn0oGphyuFYbgvrE6FJQgQ",
authDomain: "mern-projec.firebaseapp.com",
databaseURL: "https://mern-projec-default-rtdb.firebaseio.com",
projectId: "mern-projec",
storageBucket: "mern-projec.appspot.com",
messagingSenderId: "760297962433",
appId: "1:760297962433:web:80adf7f5d905f76ace8d40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestoreDatabase = getFirestore(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage =getStorage(app);

export default firestoreDatabase;