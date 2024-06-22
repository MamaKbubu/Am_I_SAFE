// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbRheD-XTsY-FuTeJul3lOhg0MsfFmSKo",
  authDomain: "doggycloud-31ef8.firebaseapp.com",
  databaseURL: "https://doggycloud-31ef8-default-rtdb.firebaseio.com",
  projectId: "doggycloud-31ef8",
  storageBucket: "doggycloud-31ef8.appspot.com",
  messagingSenderId: "1011226555177",
  appId: "1:1011226555177:web:39e825da6e46839455fd38",
  measurementId: "G-4QECT8CFT5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app;
