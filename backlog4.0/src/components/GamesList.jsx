/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { getDoc, doc } from 'firebase/firestore'

import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { db } from '../../Firebase.config'

function GamesList() {
    const auth = getAuth()
    const [user, setUser] = useState({})
    const [getUserGames, setGetUserGames] = useState([])

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    const docRef = doc(db, 'users', `${user.uid}`)
    useEffect(() => {
        const setupUI = async () => {
            const docSnap = await getDoc(docRef)
            console.log(docSnap.data().games)
            setGetUserGames(docSnap.data().games)
        }
        setupUI()
    }, [])
    console.log(getUserGames)

    const gamesLog = getUserGames.map((game) => {
        return (
            <tr>
                <td>
                    <input className="checkbox" type="checkbox" name="" id="" />
                </td>
                <td className="text-bg-dark">{game}</td>
                <td>
                    <button className="btn btn-outline-light">
                        Delete Game
                    </button>
                </td>
            </tr>
        )
    })
    return (
        <div>
            <h1 className="display-1">${user.email}'s backlog</h1>
            <br />
            <br />
            <div className="table-responsive">
                <table className="table fs-4 align-middle table-dark table-striped table-bordered  table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Completed</th>
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
