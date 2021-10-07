import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZVJAcYkNlSapdFWVZ0fV_mecgUjLRsNI",
  authDomain: "yt-clone-a7e5c.firebaseapp.com",
  projectId: "yt-clone-a7e5c",
  storageBucket: "yt-clone-a7e5c.appspot.com",
  messagingSenderId: "994689069520",
  appId: "1:994689069520:web:bc2eeffc24df3c4ac6c9d5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

provider.setCustomParameters({
  prompt: "select_account",
});

export { db, auth, provider, storage };
