/* eslint-disable react/no-unescaped-entities */
import LoginModal from '../../components/LoginModal'
import SignUpModal from '../../components/SignUpModal'
import './Home.css'

function Home() {
    return (
        <div className="bg-dark home--container">
            <p className="fw-bold text-light">Backlog</p>
            <LoginModal />
            <small className="fw-bold text-light">
                Don't have an account?
                <span className="text-center">{<SignUpModal />}</span>
            </small>
        </div>
    )
}

export default Home
