import admin from "firebase-admin";

import serviceAccount from './credentials.js';

admin.initializeApp({ // connects to our firebase project
  credential: admin.credential.cert(serviceAccount) //creating a certificate from our credentials
});

// Now we are connected to OUR Firebase project and related services

const db = admin.firestore(); // creates a shortcut to access the Firestore database 

const restaurantsCol = db.collection('restaurants');

// restaurantsCol.get() // get ALL resturants 
//     .then(snapshot => {
//         // loop through all results
//         snapshot.docs.forEach(doc => console.log(doc.data()))
//     })
//     // .catch(err => console.error(err)) // same thing as line below
//     .catch(console.error);

restaurantsCol
// .where('name', '==', 'Bolay') //.where takes 3 parameters the field, how do you want to filter, what you are trying to compare too
.where('rating', '>=', 4.75)
.get()
.then(snapshot => {
snapshot.docs.forEach(doc => console.log(doc.data()))
}).catch(console.error);