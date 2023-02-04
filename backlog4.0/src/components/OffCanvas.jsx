function OffCanvas() {
    return (
        <div className="offCanvas">
            <button
                className="btn btn-sm btn-outline-secondary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasTop"
                aria-controls="offcanvasTop"
            >
                Tutorial
            </button>

            <div
                className="offcanvas offcanvas-top  text-bg-dark"
                tabIndex="-1"
                id="offcanvasTop"
                aria-labelledby="offcanvasTopLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasTopLabel">
                        Welcome to BackLog!
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    This is a simple site for a simple need. Tracking what games
                    you need to play. Simply search for the game, click the add
                    game button below it, and click save changes and the pop up
                    box that will display. Once you click, you will receive a
                    message stating that the game was added successfully. To see
                    the games in your log, simply click the Go To Log text and
                    you will get a list of games ordered by when they were
                    added. To delete a game from your log, you MUST CHECK THE
                    COMPLETED CHECKBOX. Then, you can click the Delete Game
                    button. Enjoy!
                </div>
            </div>
        </div>
    )
}

export default OffCanvas
