import React from 'react'
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation()
    const url = location.pathname;

    return (
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
                    url === '/boards' ?
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
                    <p>reset <img src="assets/img/reset.svg" alt="reset" className="img-fluid" /></p>
                </div>

                <div className="zoom">
                    <p>zoom</p>
                    <input type="range" className="form-range" id="range-slider__range" />
                </div>
            </div>
        </div>
    )
}

export default Footer