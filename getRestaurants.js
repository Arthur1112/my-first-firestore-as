import { restaurantsCol } from './connectDb.js';

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