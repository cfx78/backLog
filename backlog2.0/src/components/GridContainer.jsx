import LoginModal from './LoginModal'

function GridContainer() {
    return (
        <div className="grid-container">
            <div className="grid-item grid-form">
                <LoginModal />
            </div>

            <div className="grid-item grid-greeting">
                <h1>Welcome</h1>

                <div className="grid-p-container">
                    <p className="B">B</p>
                    <br />
                    <p>
                        acklog is designed for people who always say I will
                        play/watch/listen to that later. Before you know it you
                        forget to watch/play these things. Now, you can log what
                        <p className="log-types">
                            games, movies, shows, and albums
                        </p>
                        that you have finished or need to finish.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GridContainer
