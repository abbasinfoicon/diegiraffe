import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="main-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="logo">
                            <Link to="/"><img src="assets/img/logo.svg" alt="logo" className="img-fluid" /></Link>
                        </div>
                    </div>

                    <div className="col-md-6 text-end">
                        <button className="btn-download"><img src="assets/img/download.svg" alt="download" className="img-fluid" /> Download</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header