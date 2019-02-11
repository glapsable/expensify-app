import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };


// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });
//
// setTimeout(() => {
//   database.ref('expenses').push({
//     name: 'Mariiusz',
//     surname: 'Czapka',
//   });
// }, 5000);
//
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.val());
// });
//
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   });

// const expenses = [
//   {
//     description: '111111',
//     note: 'note',
//     amount: '111111',
//     createdAt: '1111111',
//   }, {
//     description: '222222',
//     note: 'note',
//     amount: '222222',
//     createdAt: '222222',
//   }, {
//     description: '333333',
//     note: 'note',
//     amount: '333333',
//     createdAt: '333333',
//   },
// ];

// database.ref('expenses').push(expenses[0]);

// database.ref('notes/-LYRvWzUVCIwgJr4mUJU').update({
//   body: 'to jest konkretna poprawka',
// }, (snapshot) => {
//   console.log(snapshot);
// });


// database.ref('notes').push({
//   title: 'EloElo222',
//   body: 'Elo Elo Elo222',
// });

// const notes = [{
//   id: 12,
//   note: 'first note',
//   body: 'This is my note',
// }, {
//   id: 2342,
//   note: 'dupa note',
//   body: 'This is my note',
// }];
//
// database.ref('notes').set(notes);


// database.ref().on('value', (snapshot) => {
//   const { name, job } = snapshot.val();
//   const { company, title } = job;
//   console.log(`${name} is a ${title} at ${company}`);
// }, (e) => {
//   console.log('error', e);
// });
//
// setTimeout(() => {
//   database.ref().update({
//     'job/company': 'Atos',
//   });
// }, 5000);
//
// setTimeout(() => {
//   database.ref().update({
//     'job/title': 'programmer',
//   });
// }, 8000);

// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('nie dziala', e);
// });

// setTimeout(() => {
//   database.ref('age').set(28);
// }, 5000);
//
// setTimeout(() => {
//   database.ref().off();
// }, 10000);
//
// setTimeout(() => {
//   database.ref('age').set(31);
// }, 15000);

// database.ref('location')
//   .once('value').then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => console.log(e));

// database.ref().set({
//   name: 'Mariusz',
//   age: 26,
//   stressLevel: 6,
//   isSingle: false,
//   job: {
//     title: 'software developer',
//     company: 'Google',
//   },
//   location: {
//     city: 'Krośnice',
//     street: 'Łąkowa 6',
//   },
// }).then(() => {
//   console.log('pozslo ');
// }).catch((e) => {
//   console.log('failed', e);
// });
//
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Boston',
// });
