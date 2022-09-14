import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAjvCb6e1YjIDUB6kZK5LQm-ebqKSTRgQY',
  authDomain: 'fb-clone-617d1.firebaseapp.com',
  projectId: 'fb-clone-617d1',
  storageBucket: 'fb-clone-617d1.appspot.com',
  messagingSenderId: '669345979410',
  appId: '1:669345979410:web:220a33862542630be90ccb',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const storage = firebase.storage();

export { db, storage };
