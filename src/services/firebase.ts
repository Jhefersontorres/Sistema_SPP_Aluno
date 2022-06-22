import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAZaZprBxUnr9GdM_i6IawuRVcwKLV6CXg",
  authDomain: "appspp-2c016.firebaseapp.com",
  databaseURL: "https://appspp-2c016-default-rtdb.firebaseio.com",
  projectId: "appspp-2c016",
  storageBucket: "appspp-2c016.appspot.com",
  messagingSenderId: "850555058520",
  appId: "1:850555058520:web:bfa09a9876e1323789cd2d"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }