importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

const config = {
  apiKey: "AIzaSyDunWkOmWTLmqOg9Y7osvoLZHO_QcbLXqI",
  authDomain: "phojie-747ba.firebaseapp.com",
  databaseURL: "https://phojie-747ba.firebaseio.com",
  projectId: "phojie-747ba",
  storageBucket: "phojie-747ba.appspot.com",
  messagingSenderId: "465315485600"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

