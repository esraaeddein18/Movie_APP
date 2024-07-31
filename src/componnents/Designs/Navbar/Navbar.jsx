import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = ({name}) => {
  return (
    <>  
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary px-5 ">
        <div className="container-fluid ms-5 me-5">
            <Link className="navbar-brand fs-3 text-white" to="/Home">Movie App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ms-5 me-5" id="navbarSupportedContent">
                <ul className="navbar-nav ms-5 me-5 mb-2 mb-lg-0">
                        <div className="dropdown">
                            <Link className="btn text-white fw-bold"  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Movies
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><Link className="dropdown-item text-black fw-bold" to="/MoviesProvider">MoviesProvider</Link></li>
                                <li><Link className="dropdown-item text-black fw-bold" to="/">TV</Link></li>
                                <li><Link className="dropdown-item text-black fw-bold" to="/AirTriding">Airtriending</Link></li>
                            </ul>
                        </div>
                    <li className="nav-item">
                        <div className="dropdown">
                            <Link className="btn text-white fw-bold" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            TV Series
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><Link className="dropdown-item text-black fw-bold" to="/People">Popular</Link></li>
                                <li><Link className="dropdown-item text-black fw-bold" to="/TopRated">Top Rated</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white fw-bold" to="/PlayingVideo">Videos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white fw-bold" to="/People">People</Link>
                    </li>
                </ul>

            </div>
            <div className="d-flex gap-2">
            <button type="button" className="btn btn-success">Login</button>
            <button type="button" className="btn btn-success">Register</button>
            </div>


        </div>
    </nav> 
    </>
     
    )
}

export default Navbar