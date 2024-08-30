// src/firebase-config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDs_B3B4Gj4GedMTbna0z1Youhwj_8kSy4",
  authDomain: "json-stock.firebaseapp.com",
  databaseURL: "https://json-stock-default-rtdb.firebaseio.com",
  projectId: "json-stock",
  storageBucket: "json-stock.appspot.com",
  messagingSenderId: "627037123453",
  appId: "1:627037123453:web:0906d8e06f5f8365ec5214"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
