import React from 'react'

const PageNotFound = () => {
    return (
        <div className='pageNotFound'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center">
                        <img src="assets/img/404.png" alt="404" className="img-fluid" />
                        <h3>404</h3>
                        <p>This page could not be found.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound