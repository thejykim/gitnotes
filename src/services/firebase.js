import firebase from 'firebase';

// it should be fine to upload this config on GitHub, since
// my security rules *should* prevent data manipulation

const config = {
  apiKey: "AIzaSyCljOm2LWhN4K6k5iSgaFBgW1cZyY1h22o",
  authDomain: "gitnotes-7058d.firebaseapp.com",
  databaseURL: "https://gitnotes-7058d.firebaseio.com",
  projectId: "gitnotes-7058d",
  storageBucket: "gitnotes-7058d.appspot.com",
  messagingSenderId: "318030169422",
  appId: "1:318030169422:web:ea8f03f3d449e280e98a1f",
  measurementId: "G-Z08E1JSJQD"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
export const auth = firebase.auth;
export const db = firebase.database();