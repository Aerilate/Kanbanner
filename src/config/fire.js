import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC-xSl7Aw1v1lvj1yQ5cLhhafT4xGIwVCI",
    authDomain: "kanbanner-cbf56.firebaseapp.com",
    databaseURL: "https://kanbanner-cbf56.firebaseio.com",
    projectId: "kanbanner-cbf56",
    storageBucket: "kanbanner-cbf56.appspot.com",
    messagingSenderId: "1097670929039",
    appId: "1:1097670929039:web:71be76ce14629607821efa",
    measurementId: "G-7T11M3L83Q"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
