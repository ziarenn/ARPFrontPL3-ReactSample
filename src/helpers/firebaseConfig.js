// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDL758pz8Ha2-xAWlZxrw9Ihe3-TQdd2DE",
  authDomain: "arpfrontpl3-react.firebaseapp.com",
  projectId: "arpfrontpl3-react",
  storageBucket: "arpfrontpl3-react.appspot.com",
  messagingSenderId: "561231910528",
  appId: "1:561231910528:web:cdbdaefa3832b635d6f865",
  measurementId: "G-5W9DB2QK4M",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
