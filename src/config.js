import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDHBnMbXKjhcg2cRNOjnh1TpPwrM3F-2JY",
  authDomain: "fir-iot-fb81e.firebaseapp.com",
  databaseURL: "https://fir-iot-fb81e-default-rtdb.firebaseio.com",
  projectId: "fir-iot-fb81e",
  storageBucket: "fir-iot-fb81e.appspot.com",
  messagingSenderId: "234247742694",
  appId: "1:234247742694:web:5d50cf453378d0e3758727",
  measurementId: "G-HT40M0HXXD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;