import React from 'react'
import { Link } from 'react-router-dom'

const Imprint = () => {
    return (
        <div className="full-eventWrapper text-center">
            <div className="header">
                <Link to="/">back to app</Link>
            </div>

            <div className="content py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h3>imprint</h3>

                            <p>ACCORDING TO § 5 TMG <br />
                                Daniela Schober <br />
                                Grabengasse 1 <br />
                                86609 Donauwörth</p>

                            <p>Responsible for editorial content <br />
                                Daniela Schober <br />
                                Grabengasse 1 <br />
                                86609 Donauwörth</p>

                            <p>CONTACT <br />
                                E-Mail: daniela@diegiraffe.shop <br />
                                Tel: +49 16096317394 <br />
                                <strong>Sales tax identification number according to §27 a sales tax law:</strong><br />
                                DE326156711 <br />
                                The European Commission provides a platform for online dispute resolution (OS): http://ec.europa.eu/consumers/odr <br />
                                You can find my e-mail address in the imprint above.<br />
                                I am not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="footer">
                <Link to="/">back to app</Link>
            </div>
        </div>
    )
}

export default Imprint