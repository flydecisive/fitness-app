// Import the functions you need from the SDKs you need
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
// import { getFirestore, getDocs, collection } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd8F9rhuExLAeIP9J-8JrvbxhoFZMr4Pk",
  authDomain: "fitness-pro-79801.firebaseapp.com",
  databaseURL:
    "https://fitness-pro-79801-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fitness-pro-79801",
  storageBucket: "fitness-pro-79801.appspot.com",
  messagingSenderId: "821075470781",
  appId: "1:821075470781:web:8341c6daf2d4732fa7cad4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

export const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(getAuth(app), email, password);
};

export const signInUser = async (email, password) => {
  return signInWithEmailAndPassword(getAuth(app), email, password);
};

export const changeLogin = async (email) => {
  return updateEmail(getAuth().currentUser, email);
};

export const changePassword = async (password) => {
  return updatePassword(getAuth().currentUser, password);
};

// async function getUsersCourses(db) {
//   const usersCol = collection(db, "users");
//   const usersSnapshot = await getDocs(usersCol);
//   const usersList = usersSnapshot.docs.map((doc) => doc.data());
//   return usersList;
// }

// const usersCourses = await getUsersCourses(db);
// console.log(usersCourses);
