// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-PDFOr7ACY39tpDN1d5xYEuRA15_Lojg",
  authDomain: "portfolio-6dc7e.firebaseapp.com",
  projectId: "portfolio-6dc7e",
  storageBucket: "portfolio-6dc7e.appspot.com",
  messagingSenderId: "170234309209",
  appId: "1:170234309209:web:4409baf06c40c291e59f48",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
export const contactsCollectionRef = collection(database, "contacts");
export const projectsCollectionRef = collection(database, "projects");
export const blogsCollectionRef = collection(database, "blogs");
export const auth = getAuth(app);