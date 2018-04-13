import React from 'react';
import ReactDOM from 'react-dom';
import CreationApp from './CreationApp';
import RedirectApp from './RedirectApp';
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
    return <CreationApp />
  }else {
    return <RedirectApp uLink={hash}/>
  }
}

ReactDOM.render(getPage(), document.getElementById('root'));
registerServiceWorker();

export default db;