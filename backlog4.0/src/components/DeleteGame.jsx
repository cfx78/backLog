import { arrayRemove } from 'firebase/firestore'
import { doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db, auth } from '../../Firebase.config'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function DeleteGame(props) {
    const docRef = doc(db, 'users', `${auth.currentUser.uid}`)
    const [userGames, setUserGames] = useState([])

    const navigate = useNavigate()
    const refreshPage = () => {
        navigate(0)
    }
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

    const deleteGameFromDoc = async () => {
        try {
            await updateDoc(docRef, {
                games: arrayRemove(`${props.name}`),
            })
            unsub()
            componentDidUpdate()
            refreshPage()
            console.log(userGames)
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div>
            <button
                type="button"
                className="btn addGame btn-outline-light text-bg-dark"
                data-bs-toggle="modal"
                data-bs-target={`#deleteGameModal-${props.name
                    .split(' ')
                    .join('-')}`}
            >
                Delete Game
            </button>

            <div
                className="delete--modal m-0 p-0 modal fade"
                id={`deleteGameModal-${props.name.split(' ').join('-')}`}
                tabIndex="-1"
                aria-labelledby="deleteGameLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-secondary">
                        <div className=" modal-header">
                            <h5>
                                Would you like to delete{' '}
                                <span className="text-info">{props.name} </span>
                                from your backlog?
                            </h5>
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
                                onClick={deleteGameFromDoc}
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

export default DeleteGame
