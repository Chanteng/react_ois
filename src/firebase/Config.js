import firebase from "firebase"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtmC_gtHJ67XO5V6sPU_UpdiAB8Z5LT1A",
  authDomain: "ois-media.firebaseapp.com",
  projectId: "ois-media",
  storageBucket: "ois-media.appspot.com",
  messagingSenderId: "574641677805",
  appId: "1:574641677805:web:fa733c40730f558600f3e4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;