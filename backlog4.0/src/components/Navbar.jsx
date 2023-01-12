function Navbar() {
    const styles = {
        boxShadow: '1px 10px 14px 0px rgba(0, 0, 0, 0.82)',
    }

    return (
        <div
            style={styles}
            className="d-flex justify-content-center align-items-center bg-black
        p-2 nav--container"
        >
            <nav className="navbar">
                <p className="fw-semibold text-secondary  display-1 ">
                    Backlog
                </p>
            </nav>
        </div>
    )
}

export default Navbar
