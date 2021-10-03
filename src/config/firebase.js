import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBm3Nsj6dQ754M6d3AyD-B4aqw5OKTwm6Q",
  authDomain: "yt-clone07.firebaseapp.com",
  projectId: "yt-clone07",
  storageBucket: "yt-clone07.appspot.com",
  messagingSenderId: "326451822568",
  appId: "1:326451822568:web:bcfe9b2c046751bcaa2e5d",
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
