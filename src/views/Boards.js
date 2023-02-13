import React from 'react'

const Boards = (props) => {
    return (
        <div className="row content">
            <div className="col-md-9 content_editable">
                <div className="img-full" style={{ width: props.scale }}>
                    <img src="assets/img/full-img1.jpg" alt="Full Img" className="img-fluid" />
                </div>
            </div>
        </div >
    )
}

export default Boards