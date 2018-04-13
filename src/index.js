import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var firebase = require('firebase/app');
var config = {
  apiKey: "AIzaSyACgldZl2SVXsRO3RRuBEUyezncrD7q8Ss",
  authDomain: "u-link-f25f4.firebaseapp.com",
  databaseURL: "https://u-link-f25f4.firebaseio.com",
  projectId: "u-link-f25f4",
  storageBucket: "u-link-f25f4.appspot.com",
  messagingSenderId: "1036968598950"
};
firebase.initializeApp(config);
require("firebase/firestore");
var db = firebase.firestore();

function getPage() {
  var hash = window.location.hash.substr(1).toLowerCase();;
  if(hash === "") {
    return <App />
  }else {
    var docRef = db.collection("links").doc(hash);
    docRef.get().then(function(doc) {
        if (doc.exists) {
          window.location.replace(doc.data().link);
        } else {
          //TODO
        }
    }).catch(function(error) {
      console.error(error);
      //TODO
    });
  }
}

ReactDOM.render(getPage(), document.getElementById('root'));
registerServiceWorker();

export default db;