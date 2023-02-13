import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const GraphLeft = () => {
    const handleShow = event => {
        event.currentTarget.parentElement.classList.remove('box_small');
    };
    const location = useLocation()
    const url = location.pathname;

    var curr = new Date();
    var date = curr.toISOString().substring(0, 10);

    return (
        <div className="sidebar_right">
            {
                url === '/boards' || url === '/' ?
                    <div className="graph">
                        <div className="box box_small">
                            <h3>My christmas:</h3>

                            <div className="box_lists">
                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p className='active'>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="gradient"></div>
                            </div>

                            <button className='all-show' onClick={handleShow}>all Christmas boards</button>
                        </div>

                        <div className="box box_small">
                            <h3>Birth:</h3>

                            <div className="box_lists">
                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p className='active'>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="gradient"></div>
                            </div>

                            <button className='all-show' onClick={handleShow}>all birth charts</button>
                        </div>

                        <div className="box box_small">
                            <h3>1st Birthday:</h3>

                            <div className="box_lists">
                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p className='active'>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="gradient"></div>
                            </div>

                            <button className='all-show' onClick={handleShow}>all panels 1st birthday</button>
                        </div>

                        <div className="box box_small">
                            <h3>2nd Birthday:</h3>

                            <div className="box_lists">
                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p className='active'>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="gradient"></div>
                            </div>

                            <button className='all-show' onClick={handleShow}>all panels 2nd birthday</button>
                        </div>

                        <div className="box box_small">
                            <h3>3rd Birthday:</h3>

                            <div className="box_lists">
                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p className='active'>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="gradient"></div>
                            </div>

                            <button className='all-show' onClick={handleShow}>all panels 3rd birthday</button>
                        </div>

                        <div className="box box_small">
                            <h3>Sweet Nursery Rules::</h3>

                            <div className="box_lists">
                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p className='active'>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/img-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="gradient"></div>
                            </div>

                            <button className='all-show' onClick={handleShow}>all nursery rules</button>
                        </div>
                    </div>

                    :

                    <div className="planet">
                        <div className="planet-calander">
                            <h3>First set the <br /> desired date:</h3>
                            <div className="form-group">
                                <label htmlFor="date">Select date</label>
                                <input type="date" defaultValue={date} name="date" id="date" />
                                <button type="submit">OK <span></span></button>
                            </div>
                        </div>

                        <div className="box box_small">
                            <h3>Planets:</h3>

                            <div className="box_lists">
                                <div className="box_list">
                                    <img src="assets/img/p-preview1.jpg" alt="img" className="img-fluid" />
                                    <p className='active'>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/p-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/p-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/p-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="box_list">
                                    <img src="assets/img/p-preview1.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>

                                <div className="gradient"></div>
                            </div>

                            <button className='all-show' onClick={handleShow}>all planets poster</button>
                        </div>

                        <div className="box box_small">
                            <h3>Moon:</h3>

                            <div className="box_lists">
                                <div className="box_list">
                                    <img src="assets/img/moon-preview.jpg" alt="img" className="img-fluid" />
                                    <p>€€</p>
                                </div>
                            </div>
                        </div>
                    </div>
            }

            <ul className='footer-menu'>
                <li><Link to="/imprint">imprint</Link></li>
                <li><Link to="/data-protection">data protection</Link></li>
            </ul>

        </div >
    )
}

export default GraphLeft