/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import {
    arrayUnion,
    doc,
    updateDoc,
    getDoc,
    onSnapshot,
} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { db } from '../../Firebase.config'
const auth = getAuth()

function AddGame(props) {
    const docRef = doc(db, 'users', `${auth.currentUser.uid}`)
    const [userGames, setUserGames] = useState([])
    const unsub = onSnapshot(docRef, (doc) => {
        const source = doc.metadata.hasPendingWrites ? 'Local' : 'Server'
        console.log(source, ' data: ', doc.data())
        const docSnap = getDoc(docRef)
        setUserGames(docSnap.data().games)
    })

    async function setupUI() {
        const docSnap = await getDoc(docRef)
        console.log(docSnap.data().games)
        setUserGames(docSnap.data().games)
    }

    function componentDidUpdate() {
        setupUI()
    }
    useEffect(componentDidUpdate, [auth.currentUser.uid])

    const modalMessage = () => {
        if (userGames.includes(props.name)) {
            return (
                <p
                    className="text-light modal--header modal-title fs-5"
                    id="addGameModal"
                >
                    <span data-testid="gameName" className="text-info">
                        {props.name}{' '}
                    </span>
                    successfully added!
                </p>
            )
        } else {
            return (
                <p
                    className="text-light modal--header modal-title fs-5"
                    id="addGameModal"
                >
                    Would you like to add{' '}
                    <span className="text-info">{props.name} </span>
                    to your backlog?
                </p>
            )
        }
    }
    const addGameToDoc = async () => {
        try {
            await updateDoc(docRef, {
                games: arrayUnion(`${props.name}`),
            })
            unsub()
            componentDidUpdate()
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div>
            <button
                onClick={() => {
                    console.log(props.name)
                }}
                type="button"
                className="btn addGame btn-outline-light text-bg-dark"
                data-bs-toggle="modal"
                data-bs-target={`#addGameModal-${props.slug}`}
            >
                Add Game
            </button>

            <div
                className="modal fade"
                id={`addGameModal-${props.slug}`}
                tabIndex="-1"
                aria-labelledby="addGameLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-secondary">
                        <div
                            className=" d-flex justify-content-center
                                align-items-center modal-header"
                        >
                            {modalMessage()}
                        </div>
                        <div className="modal-body">
                            <img
                                className="addGame--image"
                                src={props.image}
                                alt={props.name}
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                onClick={addGameToDoc}
                                type="button"
                                className="btn btn-primary"
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddGame
