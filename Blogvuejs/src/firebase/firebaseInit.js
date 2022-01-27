
import firebase from 'firebase/app'
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBZfO7PqDqNDrBss8O64-4PyA12rgzOXUQ",
    authDomain: "fireblogsvuejs-5d1e5.firebaseapp.com",
    projectId: "fireblogsvuejs-5d1e5",
    storageBucket: "fireblogsvuejs-5d1e5.appspot.com",
    messagingSenderId: "184108375099",
    appId: "1:184108375099:web:9fe902425aa866c74b101e"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();