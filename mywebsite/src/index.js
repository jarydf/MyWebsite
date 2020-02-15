import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import firebase from "firebase/app";

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();
const config = {
  apiKey:
    "AAAAJI7mYXI:APA91bHanogzqk7WX9a9zoxFZ4jTFoFj5mhN6x5FBatSisjScchHEYcCVT-RXZb2GDLpkULizwLziStM99FHFnq8IhA8GxkUeB3V393yiL51pjjuyJcAuUKgGlKmzoQ0hltOJLH3ySRA",
  databaseURL: "https://mywebsite-57f7f.firebaseapp.com"
};
if (!firebase) {
  firebase.initializeApp(config);
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
