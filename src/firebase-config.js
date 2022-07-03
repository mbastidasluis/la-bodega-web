// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// added configuration for development and deployment environme
let firebaseConfig;

if (process && process.env) {
  const req = require('../pro.appConfig.json');
  console.log('req', req);
  console.log('process', process);

  firebaseConfig = {
    apiKey: process.env.PREACT_APP_APIKEY,
    authDomain: process.env.PREACT_APP_AUTHDOMAIN,
    projectId: process.env.PREACT_APP_PROJECTID,
    storageBucket: process.env.PREACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.PREACT_APP_MESSAGINGSENDERID,
    appId: process.env.PREACT_APP_APPID,
    measurementId: process.env.PREACT_APP_MEASUREMENTID,
  };
} else {
  firebaseConfig = require('../pro.appConfig.json');
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
