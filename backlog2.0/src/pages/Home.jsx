function Home() {
    function Navbar() {
        return (
            <header>
                <h2>backLog</h2>
            </header>
        )
    }
    function GridContainer() {
        return (
            <div className="grid-container">
                <div className="grid-item grid-form">
                    <form action="">
                        <a href="">
                            <h4>Sign Up!</h4>
                        </a>
                        <a href="">
                            <p>Log in</p>
                        </a>
                    </form>
                </div>
                <div className="grid-item grid-greeting">
                    <h1>Welcome</h1>

                    <div className="grid-p-container">
                        <p className="B">B</p>
                        <br />
                        <p>
                            acklog is designed for people who always say I will
                            play/watch/listen to that later. Before you know it
                            you forget to watch/play these things. Now, you can
                            log what
                            <p className="log-types">
                                games, movies, shows, and albums
                            </p>{' '}
                            that you have finished or need to finish.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    function Footer() {
        return (
            <footer>
                <a href="">
                    <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="">
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="">
                    <i className="fa-brands fa-tiktok"></i>
                </a>
            </footer>
        )
    }
    return (
        <div className="home">
            <Navbar />
            <GridContainer />
            <Footer />
        </div>
    )
}

export default Home
