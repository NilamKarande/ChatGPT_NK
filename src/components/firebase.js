// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe8WZcn_jzkohICz1w-U5qHllxGOz9h7Q",
  authDomain: "nk-bot-58763.firebaseapp.com",
  projectId: "nk-bot-58763",
  storageBucket: "nk-bot-58763.appspot.com",
  messagingSenderId: "122733579788",
  appId: "1:122733579788:web:2d2eb56abda0dc79a1e829",
  measurementId: "G-6252WSHXP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth()
export const db = getFirestore(app);
export default app;