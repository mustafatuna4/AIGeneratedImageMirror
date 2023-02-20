import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//process.env.REACT_APP_KEY,
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,

  authDomain: "aigeneratedimagemirror.firebaseapp.com",

  projectId: "aigeneratedimagemirror",

  storageBucket: "aigeneratedimagemirror.appspot.com",

  messagingSenderId: "260024360911",

  appId: "1:260024360911:web:70efd7e1adc693df56fcba",

  measurementId: "G-JS7NB1WDL2",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
