let firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCvbUaDYSnIr8-1NTiqtBpistyXkYKTyDU',
  authDomain: 'verdoc-landing-page.firebaseapp.com',
  databaseURL: 'https://verdoc-landing-page.firebaseio.com',
  projectId: 'verdoc-landing-page',
  storageBucket: 'verdoc-landing-page.appspot.com',
  messagingSenderId: '151604777002',
  appId: '1:151604777002:web:0441d658085729d1',
}

if (typeof window !== `undefined`) {
  firebase = require('firebase/firebase')
  require('firebase/firestore')
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase
// export default firebase

// export const db = firebase.firestore()
