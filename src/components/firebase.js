
import * as firebase from 'firebase'

  /* // Your web app's Firebase configuration */
  const firebaseConfig = {
    apiKey: "AIzaSyD84K4jUQwDFuE8SAW_JeggNBkbbIRz44s",
    authDomain: "dummy-7249d.firebaseapp.com",
    databaseURL: "https://dummy-7249d.firebaseio.com",
    projectId: "dummy-7249d",
    storageBucket: "dummy-7249d.appspot.com",
    messagingSenderId: "982753767618",
    appId: "1:982753767618:web:b79b5122faa8b7a805cb5b",
    measurementId: "G-5HY1H69R04"
  };
  
  let app = firebase.initializeApp(firebaseConfig);


  if (!firebase.apps.length) {
    try {
       firebase.initializeApp(firebaseConfig);
    } catch (err) {
        console.error("Firebase initialization error raised", err.stack)
    }
}
export const db = app.database();