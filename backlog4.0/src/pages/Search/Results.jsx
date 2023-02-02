/* eslint-disable react/prop-types */
import './Search.css'
import Navbar from '../../components/Navbar'
import GamesList from '../../components/GamesList'

function Results() {
    return (
        <div className="border  border-top-0 border-4 border-dark-subtle bg-dark text-bg-dark">
            <Navbar />
            <main className="vh-100">
                <GamesList />
            </main>
        </div>
    )
}

export default Results
