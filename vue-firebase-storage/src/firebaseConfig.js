import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyBCZiknhXSVnlTBtTJd_ydn9bFA0-E9YNg",
  authDomain: "fir-samples-f0915.firebaseapp.com",
  databaseURL: "https://fir-samples-f0915.firebaseio.com",
  projectId: "fir-samples-f0915",
  storageBucket: "fir-samples-f0915.appspot.com",
  messagingSenderId: "829353106941",
  appId: "1:829353106941:web:3d7f7c5dc9b0568b268d94",
  measurementId: "G-FLWM5XG7XQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export { firebase };
