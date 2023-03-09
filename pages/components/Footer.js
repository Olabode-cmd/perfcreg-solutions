import React from 'react'
import { BsFillHeartFill } from 'react-icons/bs'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h3 className="title">about</h3>
                        <p>
                        Empowering Your Digital Transformation Journey with Innovative and Customized Solutions. Our team of experts works with you every step of the way to bring your ideas to life. Let us help you achieve your business goals and take your organization to new heights.
                        </p>
                    </div>

                    <div className="col-md-5">
                        <h3 className="title">company</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Our Team</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="lower-section">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <h3>Powered by Perfcreg Solutions</h3>

                        <BsFillHeartFill className='heart' />
                    </div>
                </div>
            </div>
        </footer>
    )
}
