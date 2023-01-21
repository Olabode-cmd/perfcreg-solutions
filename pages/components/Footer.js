import React from 'react'
import { BsFillHeartFill } from 'react-icons/bs'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h3 className="title">about</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Nihil doloremque reiciendis quo, ratione magnam sed temporibus
                            Nihil doloremque reiciendis quo, ratione magnam sed temporibus
                            reprehenderit debitis delectus, similique sapiente corrupti?
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
