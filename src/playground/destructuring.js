// // const person = {
// //   // name: 'Mariusz',
// //   age: 32,
// //   location: {
// //     city: 'Wrocław',
// //     temp: 92,
// //   },
// // };

// // const { name: firstName = 'Unknown', age } = person;
// // const { city, temp: temperature } = person.location;

// // console.log(`${firstName} is ${age}.`);
// // console.log(`In ${city} is ${temperature}`);


// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryal Holiday',
//   publisher: {
//     name: 'Penguin',
//   },
// };

// const { name: publisherName = 'Sefl-Published' } = book.publisher;

// console.log(publisherName);

const address = ['1200 S Jupiter Street', 'Philadelphia', 'Pensylvania', '12432'];

const [, city, state] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75'];
const [product, , cost] = item;
console.log(`A medium ${product} costs ${cost}`);
