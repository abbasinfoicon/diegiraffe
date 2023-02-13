import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import GraphLeft from '../components/GraphLeft';
import Header from '../components/Header';

const MoveableView = () => {
    const location = useLocation()
    const url = location.pathname;
    const [scale, setScale] = useState(25);

    const resetAll = () => {
        setScale(25);
    }

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
                        <div className="row content">
                            <div className="col-md-9 content_editable">
                                {
                                    url === '/boards' || url === '/' ?
                                        <div className="img-full" style={{ width: (1 * scale + 20) + '%' }}>
                                            <img src="assets/img/full-img1.jpg" alt="Full Img" className="img-fluid" />
                                        </div>
                                        :
                                        <div className="img-full" style={{ transform: `scale(${scale / 100 * 2})` }}>
                                            <img src="assets/img/full-saturn.jpg" alt="Full Img" className="img-fluid" />

                                            <div className="plnts">

                                                <div className="plnts-img mercury">
                                                    <img src="assets/img/mercury.png" alt="mercury" className="img-fluid" />
                                                </div>

                                                <div className="plnts-img venus">
                                                    <img src="assets/img/venus.png" alt="venus" className="img-fluid" />
                                                </div>

                                                <div className="plnts-img earth">
                                                    <img src="assets/img/earth.png" alt="earth" className="img-fluid" />
                                                </div>

                                                <div className="plnts-img mars">
                                                    <img src="assets/img/mars.png" alt="mars" className="img-fluid" />
                                                </div>

                                                <div className="plnts-img jupiter">
                                                    <img src="assets/img/jupiter.png" alt="jupiter" className="img-fluid" />
                                                </div>

                                                <div className="plnts-img saturn">
                                                    <img src="assets/img/saturn-big.png" alt="saturn" className="img-fluid" />
                                                </div>

                                                <div className="plnts-img uranus">
                                                    <img src="assets/img/uranus.png" alt="uranus" className="img-fluid" />
                                                </div>

                                                <div className="plnts-img neptune">
                                                    <img src="assets/img/neptune.png" alt="neptune" className="img-fluid" />
                                                </div>
                                            </div>

                                            <div className="plnts-date">
                                                <h3>February 13, 2023</h3>
                                                <h1>A pond</h1>
                                                <p>54cm - 3660g - 10:18 p.m. - Augsburg</p>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div >

                        <div className="content_fixed">
                            <ul>
                                <li className='undo'><p>undo <img src="assets/img/undo.svg" alt="undo" className="img-fluid" /></p></li>
                                <li className='upheavals'>
                                    <p><small>upheavals allow</small></p>
                                    <span>
                                        <input type="checkbox" name="checkbox" id="checkActive" />
                                        <label htmlFor="checkActive" className="checkAllow"><span></span></label>
                                    </span>
                                </li>
                                {
                                    url === '/boards' || url === '/' ?
                                        <li className='clrbox'>
                                            <label htmlFor="forClr"><input type="radio" name="clr" id="forClr" /><span className="clr clr1"></span></label>
                                            <label htmlFor="forClr2"><input type="radio" name="clr" id="forClr2" /><span className="clr clr2"></span></label>
                                            <label htmlFor="forClr3"><input type="radio" name="clr" id="forClr3" /><span className="clr clr3"></span></label>
                                            <label htmlFor="forClr4"><input type="radio" name="clr" id="forClr4" /><span className="clr clr4"></span></label>
                                        </li>
                                        : ''
                                }
                            </ul>

                            <div className="reset-zoom">
                                <div className="reset">
                                    <p onClick={resetAll}>reset <img src="assets/img/reset.svg" alt="reset" className="img-fluid" /></p>
                                </div>

                                <div className="zoom">
                                    <p>zoom</p>
                                    {/* <input type="range" className="form-range" id="range-slider__range" /> */}
                                    <input type="range" min="10" max="50" value={scale} onChange={e => { const { value } = e.target; setScale(parseInt(value, 10)); }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoveableView