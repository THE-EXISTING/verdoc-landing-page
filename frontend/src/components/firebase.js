import * as firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCvbUaDYSnIr8-1NTiqtBpistyXkYKTyDU',
  authDomain: 'verdoc-landing-page.firebaseapp.com',
  databaseURL: 'https://verdoc-landing-page.firebaseio.com',
  projectId: 'verdoc-landing-page',
  storageBucket: 'verdoc-landing-page.appspot.com',
  messagingSenderId: '151604777002',
  appId: '1:151604777002:web:0441d658085729d1',
}

firebase.initializeApp(firebaseConfig)

export default firebase

export const database = firebase.database()
