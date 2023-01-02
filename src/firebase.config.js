// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuraoLV1Dau7G1twBGA2O4L15cJHs6Zu4",
  authDomain: "maltimart-581c8.firebaseapp.com",
  projectId: "maltimart-581c8",
  storageBucket: "maltimart-581c8.appspot.com",
  messagingSenderId: "722146062423",
  appId: "1:722146062423:web:f57495363d83ba9e31f312"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
