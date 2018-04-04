import firebase from "firebase";


var config = {
    apiKey: "AIzaSyA9vYkjGefisc-TVWyrfJJQkkOZhBVRN8A",
    authDomain: "portfolio-react-94835.firebaseapp.com",
    databaseURL: "https://portfolio-react-94835.firebaseio.com",
    projectId: "portfolio-react-94835",
    storageBucket: "portfolio-react-94835.appspot.com",
    messagingSenderId: "625185136873"
  };

const firebaseConfig = firebase.initializeApp(config);

export default firebaseConfig;