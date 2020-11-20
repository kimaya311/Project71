import firebase from 'firebase';
require('@firebase/firestore') 

var firebaseConfig = {
    apiKey: "",
    authDomain: "project71-ebddf.firebaseapp.com",
    databaseURL: "https://project71-ebddf.firebaseio.com",
    projectId: "project71-ebddf",
    storageBucket: "project71-ebddf.appspot.com",
    messagingSenderId: "553255194901",
    appId: "1:553255194901:web:23fd1fdc5e2cd31e38991c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 

  export default firebase.firestore();