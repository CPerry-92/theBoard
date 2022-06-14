import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA_QmQpD5ByohMpZyUwvcgjKgTFYnZ3Ffo",
  authDomain: "theboard-ac898.firebaseapp.com",
  projectId: "theboard-ac898",
  storageBucket: "theboard-ac898.appspot.com",
  messagingSenderId: "653604206532",
  appId: "1:653604206532:web:0945890ba32d10194f9691",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
