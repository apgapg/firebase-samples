# vue-firebase-storage

Sample to demonstrate uploading image to firebase storage

<img src="https://raw.githubusercontent.com/apgapg/firebase-samples/master/vue-firebase-storage/res/s2.png"  width="auto">

## Key Highlights

- Uses firebase storage web SDK for uploading images
- Uses compressorJs for compressing image to 80% quality before uploading

## Setup

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

Also check for auth rules in **firebase storage rules** section

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
