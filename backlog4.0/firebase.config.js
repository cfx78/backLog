import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: 'AIzaSyAtTLFwvT9PrtxI3VFN5lcgMy9JubVKYrs',

    authDomain: 'backlog-661fc.firebaseapp.com',

    projectId: 'backlog-661fc',

    storageBucket: 'backlog-661fc.appspot.com',

    messagingSenderId: '27648592355',

    appId: '1:27648592355:web:bee1febdcb0cc642bf78d6',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const db = getFirestore(app)
