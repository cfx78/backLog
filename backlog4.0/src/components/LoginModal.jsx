import React from 'react'

function LoginModal() {
    return (
        <div>
            <button
                type="button"
                className="btn btn--login btn-outline-light btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
            >
                Login
            </button>

            <div
                className="modal fade"
                id="loginModal"
                tabIndex="-1"
                aria-labelledby="Login Modal"
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
                                Welcome Back
                            </p>
                        </div>
                        <div className="modal-body">
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
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
                            <button type="button" className="btn btn-secondary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginModal
