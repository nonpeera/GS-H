// Import the functions you need from the SDKs you need
import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEbp8-4Q1vnw9n5s3YYSn8VUmmB6k22bY",
  authDomain: "grownseedathome-8fe9a.firebaseapp.com",
  projectId: "grownseedathome-8fe9a",
  storageBucket: "grownseedathome-8fe9a.appspot.com",
  messagingSenderId: "187735593850",
  appId: "1:187735593850:web:2380be0370257943993cc3",
  measurementId: "G-L1MX906YGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
// Initialize Firebase Authentication and get a reference to the service
export { auth, db, storage }