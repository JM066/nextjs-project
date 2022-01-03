import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyBuLmb2JJ7x0tHZhmEAYTsMi4r00CItOeA",
  authDomain: "nextjs-project-eb4c9.firebaseapp.com",
  databaseURL: "https://nextjs-project-eb4c9-default-rtdb.firebaseio.com",
  projectId: "nextjs-project-eb4c9",
  storageBucket: "nextjs-project-eb4c9.appspot.com",
  messagingSenderId: "661358919142",
  appId: "1:661358919142:web:898550185720bb5562ea27",
  measurementId: "G-WEZ231LZ50",
};

const app = firebase.initializeApp(config);

export const firesotre = firebase.firestore(app);
