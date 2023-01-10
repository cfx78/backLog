import LoginModal from '../../components/LoginModal'
import './Home.css'

function Home() {
    return (
        <div className="bg-dark home--container">
            <p className="fw-bold text-light">Backlog</p>
            <LoginModal />
        </div>
    )
}

export default Home
