// Created restaurant ZIhifv7DphwmHLAfskCC
const admin = require("firebase-admin"); // imports firebase library of tools

const serviceAccount = require('./credentials'); // import our credentials to connect to firebase

admin.initializeApp({ // connects to our firebase project
  credential: admin.credential.cert(serviceAccount) //creating a certificate from our credentials
});

// Now we are connected to OUR Firebase project and related services

const db = admin.firestore(); // creates a shortcut to access the Firestore database 

const restaurantsCol = db.collection('restaurants');

// delete ZIhifv7DphwmHLAfskCC

restaurantsCol.doc('ZIhifv7DphwmHLAfskCC').delete()
    .then(res => console.log('Success deleting ZIhifv7DphwmHLAfskCC!!'))
    .catch(err => console.error('Error deleting ZIhifv7DphwmHLAfskCC: ', err))