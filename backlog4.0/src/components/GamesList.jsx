/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { getDoc, doc, onSnapshot } from 'firebase/firestore'
import { NavLink } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { db } from '../../Firebase.config'
import DeleteGame from './DeleteGame'

function GamesList() {
    const auth = getAuth()
    const [user, setUser] = useState({})
    const [userGames, setUserGames] = useState([])
    const docRef = doc(db, 'users', `${user.uid}`)

    onAuthStateChanged(auth, setUser)
    async function setupUI() {
        const docSnap = await getDoc(docRef)
        console.log(docSnap.data())
        setUserGames(docSnap.data().games)
    }
    const unsub = onSnapshot(docRef, (doc) => {
        const source = doc.metadata.hasPendingWrites ? 'Local' : 'Server'
        console.log(source, ' data: ', doc.data())
    })
    unsub()

    function componentDidUpdate() {
        setupUI()
    }
    useEffect(componentDidUpdate, [user])
    function toGamesLog(game) {
        return (
            <tr>
                <td className="text-bg-dark">{game}</td>
                <td>
                    <DeleteGame name={game} />
                </td>
            </tr>
        )
    }

    const gamesLog = userGames.map(toGamesLog)
    console.log(userGames)
    return (
        <div className="vh-100">
            <NavLink
                to="/search"
                className="text-bg-dark border border-light
                border-1 p-3 search--link display-2 rounded"
            >
                Go To Search
            </NavLink>
            <h1 className="gameList--heading display-1">
                {user.email} <br /> Backlog
            </h1>
            <br />
            <br />
            <div className="table-responsive">
                <table className="table fs-4 align-middle table-dark table-striped table-bordered  table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Game</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">{gamesLog}</tbody>
                </table>
            </div>
        </div>
    )
}

export default GamesList
