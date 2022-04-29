import admin from "firebase-admin";

import serviceAccount from './credentials.js';

admin.initializeApp({ // connects to our firebase project
  credential: admin.credential.cert(serviceAccount) //creating a certificate from our credentials
});

// Now we are connected to OUR Firebase project and related services

const db = admin.firestore(); // creates a shortcut to access the Firestore database 

export const restaurantsCol = db.collection('restaurants');