import React from 'react';
//import './footer.css';
import { Link } from 'react-router-dom';
//import bg from '../../assets/footer-bg.jpg';
//import logo from '../../assets/tmovie.png';
//                        <img src={logo} alt="" />
const Footer = () => {
    return (
        <div className="footer bg-danger py-5">
                    <div className="container row d-flex ">
            <div className="col-sm-2 ms-5 me-4">
                <div className="logo">
                    <Link to="/" className='text-white fs-3 text-decoration-none'>Movies</Link>
                </div>
            </div>
            <div className="col-sm-3">
                <Link to="/" className='text-white text-decoration-none'>Home</Link><br></br>
                <Link to="/"className='text-white text-decoration-none'>Contact us</Link><br></br>
                <Link to="/" className='text-white text-decoration-none'>Term of services</Link><br></br>
                <Link to="/"className='text-white text-decoration-none'>About us</Link><br></br>
            </div>
                <div className="col-sm-3">
                    <Link to="/"className='text-white text-decoration-none'>Live</Link><br></br>
                    <Link to="/"className='text-white text-decoration-none'>FAQ</Link><br></br>
                    <Link to="/"className='text-white text-decoration-none'>Premium</Link><br></br>
                    <Link to="/"className='text-white text-decoration-none'>Pravacy policy</Link><br></br>
                </div>
                <div className="col-sm-3">
                        <Link to="/"className='text-white text-decoration-none'>You must watch</Link><br></br>
                        <Link to="/"className='text-white text-decoration-none'>Recent release</Link><br></br>
                        <Link to="/"className='text-white text-decoration-none'>Top IMDB</Link><br></br>
                </div>
        </div>
        </div>

    );
}
export default Footer;