import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../Firebase.config'
import { useNavigate } from 'react-router-dom'
import { setDoc, doc } from 'firebase/firestore'

function SignUpModal() {
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const navigate = useNavigate()
    // const usersCollectionRef = collection(db, 'users')

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            )
            console.log(user.user.uid)
            const docRef = await doc(db, 'users', user.user.uid)
            setDoc(docRef, {
                userEmail: registerEmail,
                games: [],
            })

            navigate('/search')
            console.log(user.user.email)
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div>
            <button
                type="button"
                className="btn btn--signUp btn-outline-light btn-lg border border-0"
                data-bs-toggle="modal"
                data-bs-target="#signUpModal"
            >
                Sign Up Here!
            </button>

            <div
                className="modal fade"
                id="signUpModal"
                tabIndex="-1"
                aria-labelledby="Sign Up Modal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-secondary">
                        <div
                            className=" d-flex justify-content-center
                                align-items-center modal-header"
                        >
                            <p
                                className="
                                text-light
                                modal--header
                                 modal-title fs-1"
                                id="LoginModal"
                            >
                                Welcome
                            </p>
                        </div>
                        <div className="modal-body">
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    onChange={(e) => {
                                        setRegisterEmail(e.target.value)
                                    }}
                                />
                                <label htmlFor="floatingInput">
                                    Email address
                                </label>
                            </div>
                            <div className="form-floating">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    onChange={(e) => {
                                        setRegisterPassword(e.target.value)
                                    }}
                                />
                                <label htmlFor="floatingPassword">
                                    Password
                                </label>
                            </div>
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
                                onClick={register}
                                type="button"
                                className="btn btn-secondary"
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

export default SignUpModal
