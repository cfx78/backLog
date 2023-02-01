import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { db } from '../Firebase.config'

//*pages
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound'
import Search from './pages/Search/Search'
import Results from './pages/Search/Results'

function App() {
    const [userGames, setUserGames] = useState([])
    const auth = getAuth()
    const [user, setUser] = useState({})
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    useEffect(() => {
        function getGames() {
            const docRef = doc(db, 'users', `${user.uid}`)
            getDoc(docRef).then((doc) => {
                setUserGames(doc.data().games)
            })
        }
        getGames()
    }, [])
    console.log(userGames)
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route index element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="search" element={<Search />} />
                <Route path="results" element={<Results list={userGames} />} />
            </Route>
        )
    )
    return <RouterProvider router={router} />
}

export default App
