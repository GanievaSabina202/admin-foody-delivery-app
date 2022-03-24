import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBaqa80H7IjqYgdIjVtvY8WneBapjQTGVo",
    authDomain: "foody-main.firebaseapp.com",
    databaseURL: "https://foody-main-default-rtdb.firebaseio.com",
    projectId: "foody-main",
    storageBucket: "foody-main.appspot.com",
    messagingSenderId: "234814746269",
    appId: "1:234814746269:web:3ad8b774b45efd004e2e74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);