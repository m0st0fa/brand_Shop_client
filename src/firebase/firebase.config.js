// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8LspG6P-HwfUl3Qlv69iuz1J-iApkvFk",
  authDomain: "brand-tech-shop.firebaseapp.com",
  projectId: "brand-tech-shop",
  storageBucket: "brand-tech-shop.appspot.com",
  messagingSenderId: "958820780128",
  appId: "1:958820780128:web:7bd9798bfdfed6503edb05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app