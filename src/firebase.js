// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "YOUR_APIKEY",
  authDomain: "ecommerce-clone-xiangning.firebaseapp.com",
  databaseURL: "https://ecommerce-clone-xiangning.firebaseio.com",
  projectId: "ecommerce-clone-xiangning",
  storageBucket: "ecommerce-clone-xiangning.appspot.com",
  messagingSenderId: "192754761828",
  appId: "1:192754761828:web:f6fc73be6609bee3b75f71",
  measurementId: "G-E6LR15V47W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
