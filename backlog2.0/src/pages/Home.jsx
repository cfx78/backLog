import '../index.css'
import GridContainer from '../components/GridContainer'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Home() {
    return (
        <div className="home">
            <Navbar />
            <GridContainer />
            <Footer />
        </div>
    )
}

export default Home
