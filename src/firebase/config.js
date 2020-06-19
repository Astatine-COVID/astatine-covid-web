import app from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

function gotData(data){
  console.log(data.val())
  let patients = data.val(); 
    let keys = Object.keys(patients);
    console.log(keys)
}

function errData(data){
  console.log('Error!')
}

export default class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    const database = app.database(); 
    const ref = database.ref('patients');
    console.log(ref)
    ref.on('value',gotData,errData)
    this.auth = app.auth();
  }



  createUser(email, password) {
    this.auth.createUserWithEmailAndPassword(email, password);
  }

  signInUser(email, password) {
    this.auth.signInWithEmailAndPassword(email, password);
  }

  signOutUser() {
    this.auth.signOut();
  }

  resetPassword(email) {
    this.auth.sendPasswordResetEmail(email);
  }

  passwordUpdate(password) {
    this.auth.currentUser.updatePassword(password);
  }
}
