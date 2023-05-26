import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
//   apiKey: "AIzaSyDNeZnel839fXRwkEcMWFI7ZQGt2wEtmmY",
//   authDomain: "sheyhealthy-lite.firebaseapp.com",
//   projectId: "sheyhealthy-lite",
//   storageBucket: "sheyhealthy-lite.appspot.com",
//   messagingSenderId: "1035820909890",
//   appId: "1:1035820909890:web:9bc7beda9301359d7234db",
//   measurementId: "G-TKW0LJ3XRX",

apiKey: "AIzaSyA764C7WdnjFOiwfh9q9nqstrCqA08gvfU",
  authDomain: "social-c7db0.firebaseapp.com",
  projectId: "social-c7db0",
  storageBucket: "social-c7db0.appspot.com",
  messagingSenderId: "782857857583",
  appId: "1:782857857583:web:e080621d0ffb1776d6b4da",
  measurementId: "G-B2S28WESDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestoreDatabase = getFirestore(app);

export default firestoreDatabase;