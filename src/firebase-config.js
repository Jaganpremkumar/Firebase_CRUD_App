
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCgTvFwJVZZtsssZ4mAIrKtozJLcQf1Tws",
  authDomain: "react-crud-a3cdb.firebaseapp.com",
  projectId: "react-crud-a3cdb",
  storageBucket: "react-crud-a3cdb.appspot.com",
  messagingSenderId: "199332642106",
  appId: "1:199332642106:web:67b28aa8b7149e63022403",
  measurementId: "G-B36T426E5J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Ref to firestore db 
export const db=getFirestore(app);
