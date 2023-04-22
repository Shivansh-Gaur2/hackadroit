import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyC1LjSb0dEhIGQEZbDIB8uunlXz7Vr2DVc",
    authDomain: "pyscoders.firebaseapp.com",
    projectId: "pyscoders",
    storageBucket: "pyscoders.appspot.com",
    messagingSenderId: "825816924321",
    appId: "1:825816924321:web:0ecff5ae4e95c0105130e0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth }