import './Home.scss'
import LoginModal from '../../components/LoginModal/LoginModal'

export default function Home() {
    return (
        <div className="Home d-flex flex-column justify-content-center align-items-center p-5">
            <p className="backlog mb-5 align-self-auto text-light">BACKLOG</p>
            <LoginModal />
        </div>
    )
}
