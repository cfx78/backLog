function Navbar() {
    const styles = {
        boxShadow: '1px 10px 14px 0px rgba(0, 0, 0, 0.82)',
    }

    return (
        <div
            style={styles}
            className="d-flex justify-content-center align-items-center bg-black
        p-1 nav--container border-top border-bottom border-4 border-dark-subtle "
        >
            <nav className="navbar">
                <p
                    className="
                p-3 fw-semibold text-secondary  display-1 heading
                text-decoration-underline pb-4 "
                >
                    <span className="flicker-slow">B</span>ack
                    <span className="flicker-fast">l</span>og
                </p>
            </nav>
        </div>
    )
}

export default Navbar
