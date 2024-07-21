// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseOptions } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig:FirebaseOptions = {
    apiKey: process.env.NEXT_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_FIREBASE_PROJECTID,
    storageBucket: process.env.NEXT_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_FIREBASE_MESSAGE_SENDERID,
    appId: process.env.NEXT_FIREBASE_APP_ID,
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);