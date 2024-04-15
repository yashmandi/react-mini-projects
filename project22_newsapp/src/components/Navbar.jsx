const Navbar = ({ setCategory }) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><span className="badge text-light fs-3">News <span></span><span className="badge fs-4" style={{ backgroundColor: '#FF8C00' }}>hub</span></span>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <div className="nav-link fs-5" onClick={() => setCategory("technology")} style={{ cursor: "pointer" }}>Technology</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link fs-5 ml-2" onClick={() => setCategory("business")} style={{ cursor: "pointer" }}>Business</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link fs-5 ml-2" onClick={() => setCategory("health")} style={{ cursor: "pointer" }}>Health</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link fs-5 ml-2" onClick={() => setCategory("science")} style={{ cursor: "pointer" }}>Science</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link fs-5 ml-2" onClick={() => setCategory("sports")} style={{ cursor: "pointer" }}>Sports</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link fs-5 ml-2" onClick={() => setCategory("entertainment")} style={{ cursor: "pointer" }}>Entertaintment</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
