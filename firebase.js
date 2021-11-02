import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRbQxEN_U2ynaMeeONIgAWtHuGPlLZ8S4",
  authDomain: "signalclone-aac1d.firebaseapp.com",
  projectId: "signalclone-aac1d",
  storageBucket: "signalclone-aac1d.appspot.com",
  messagingSenderId: "898417715473",
  appId: "1:898417715473:web:e508ae838b9c59173e84b0",
  measurementId: "G-J4YXYXRXNF"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
