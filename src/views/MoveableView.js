import React from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import GraphLeft from '../components/GraphLeft';
import Header from '../components/Header';

const MoveableView = () => {
    const location = useLocation()
    const url = location.pathname;
    console.log("location-", url)

    return (
        <>
            <div className="main">
                <Header />

                <div className="main-wrapper">
                    <div className="sidebar">
                        <div className="sidebar_left">
                            <ul>
                                <li><NavLink to='/boards'><img src="assets/img/balloon.png" alt="Balloon" className="img-fluid" /></NavLink></li>
                                <li><NavLink to='/planets'><img src="assets/img/saturn.png" alt="Saturn" className="img-fluid" /></NavLink></li>
                            </ul>

                            <Link to='/' className='infoicon'><img src="assets/img/info-white.svg" alt="info" className="img-fluid" /></Link>
                        </div>

                        <GraphLeft />
                    </div>

                    <div className="main-wrapper-content">
                        <Outlet />

                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoveableView