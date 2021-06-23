import firebase from 'firebase';
require('@firebase/firestore')


// var firebaseConfig = {
//     apiKey: "AIzaSyASyOjOtJla-X-b3io2eLoaUc_bIRFSIIc",
//     authDomain: "book-santa-app.firebaseapp.com",
//     databaseURL: "https://book-santa-app.firebaseio.com",
//     projectId: "book-santa-app",
//     storageBucket: "book-santa-app.appspot.com",
//     messagingSenderId: "69634746716",
//     appId: "1:69634746716:web:6fbbfc110fb4475365f999",
//     measurementId: "G-DLB7XC0JPL"
//   };
const firebaseConfig = {
  apiKey: "AIzaSyAZr_eu4WA0pGKHtLBa4J-yDlzGr2l6JjM",
  authDomain: "gods-for-thousand.firebaseapp.com",
  projectId: "gods-for-thousand",
  storageBucket: "gods-for-thousand.appspot.com",
  messagingSenderId: "129956810011",
  appId: "1:129956810011:web:d6e17d466394175c2fd7be"
};


// Initialize Firebase
if(!firebase.apps.length)
{
firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
