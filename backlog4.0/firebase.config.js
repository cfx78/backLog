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

export const useData = (path, transform) => {
    const { data, isLoading, error } = useDatabaseValue(
        path,
        ref(database, path),
        { subscribe: true }
    )
    const value = !isLoading && !error && transform ? transform(data) : data

    return [value, isLoading, error]
}

export const useUserState = () => {
    const [user, setUser] = useState()

    useEffect(() => {
        onIdTokenChanged(auth, setUser)
    }, [])

    return [user]
}
