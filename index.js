// import admin from "firebase-admin";

// import serviceAccount from './credentials.js';



const admin = require("firebase-admin"); // imports firebase library of tools

const serviceAccount = require('./credentials'); // import our credentials to connect to firebase

admin.initializeApp({ // connects to our firebase project
  credential: admin.credential.cert(serviceAccount) //creating a certificate from our credentials
});

// Now we are connected to OUR Firebase project and related services

const db = admin.firestore(); // creates a shortcut to access the Firestore database 

const restaurant = { // creating an object - in this case a specific restaurant we want to add to our
    name: 'Mister 01',
    address: '555 N Federal Hwy Suite #5, Boca Raton, Fl 33432',
    cuisine: 'Pizza',
    rating: 4.9,
    phone: '(786) 677-2903', 
} 

db.collection('restaurants').add(restaurant) // adding the restaurant to our restaurant collection
.then(doc => console.log('Created restaurant', doc.id)) // handle resolve
.catch(err => console.error(err)) // handle reject 

const restaurant2 = {
    name: 'Bolay',
    address: '7060 W Palmetto Park Rd',
    cuisine: 'American',
    rating: 4.6,
}

async function addRestaurant(data) {
    try {
        const doc = await db.collection('restaurants').add(data) // add restaurant to collection 
        console.log('Created restaurant', doc.id) // handle resolve
    } catch(err){
        console.error(err) // handle reject 
    }
}

addRestaurant(restaurant2)

