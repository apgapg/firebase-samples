# firebase-samples

Collection of different firebase samples demonstrating their usage for all Android, Flutter, iOS, Web, Admin SDKs.

## 1. Sample to demonstrate uploading image to firebase storage

<img src="https://raw.githubusercontent.com/apgapg/firebase-samples/master/vue-firebase-storage/res/s2.png"  width="auto">

## Firebase Setup

- To use your own firebase project, add web app and replace the following credentials in `src/firebaseConfig.js`

```
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
```