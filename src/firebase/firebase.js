import * as firebase from 'firebase'



const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export{ firebase, database as default }



// // database.ref('notes').on('child_removed', (snapshot) => {
// //     console.log(snapshot.key, snapshot.val())
// // })
// //child_changed
// database.ref('notes').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// //child_added 
// database.ref('notes').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })


// // database.ref('notes').on('value', (snapshot) => {
// //     const notes = []

// //     snapshot.forEach((childSnapshot) => {
// //         notes.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         })
// //     })

// //     console.log(notes)

// // })



// // database.ref('notes').push({
// //     title: 'Todo',
// //     body: 'GO FOR RUN'
// // })
// // database.ref('notes').push({
// //     title: 'Todo',
// //     body: 'GO EAT'
// // })

// // database.ref('notes').push({
// //     title: 'Todo',
// //     body: 'GO TO MOVIE'
// // })



// // database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val()
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.Company}`)
// // })



// // database.ref('location/city').once('value').then((snapshot) => {const val = snapshot.val(); console.log(val)}).catch((e) => { console.log("error: ",e)})

// // database.ref().set({
// //     name: 'Jonathan',
// //     age: 28,
// //     stressLevel: 6,
// //     job: { title:'Software developer', Company: 'Google' },
// //     location: {
// //         city: 'Austin',
// //         country: 'USA'
// //     }
// // }).then(() => {
// //     console.log('Data is saved')
// // }).catch((e) => {
// //     console.log("Something went wrong", e)
// // })

// // database.ref("location/city").set('Dallas')

// // database.ref('attributes').set({
// //     height: '5 feet 10 inches',
// //     weight: 190
// // })

// // database.ref('isSingle').remove()

// // database.ref().update({
// //     stressLevel: 9,
// //     "job/Company": 'Amazon',
// //     "location/city": 'Seattle'

// // })