import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAcVndP0hgpoDKgM-kjmEfj3FGhgvBcxEw",
  authDomain: "letsgtokui.firebaseapp.com",
  projectId: "letsgtokui",
  storageBucket: "letsgtokui.appspot.com",
  messagingSenderId: "977106691666",
  appId: "1:977106691666:web:0a446f7f48485d1ffb218b",
  measurementId: "G-K2LP20M6QW",
});


var db = firebaseApp.firestore()

export { db }