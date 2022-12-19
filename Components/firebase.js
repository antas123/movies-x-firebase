// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe6r4bB6R6ats_A17m06V25oKUDubsDfk",
  authDomain: "moviemania-65cdb.firebaseapp.com",
  projectId: "moviemania-65cdb",
  storageBucket: "moviemania-65cdb.appspot.com",
  messagingSenderId: "697181844871",
  appId: "1:697181844871:web:95a4af1e669d5072078f22",
  measurementId: "G-6275BX09SH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;