import React from 'react'
import { HiOutlineLocationMarker, HiOutlineClock } from 'react-icons/hi'
import { BiEnvelope, BiPhone } from 'react-icons/bi'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

export default function Navtip() {
    return (
        <div className='navtip'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="d-flex">
                            <span className='navinfo'>
                                <HiOutlineLocationMarker className='navicon' /> Lagos, Nigeria
                            </span>

                            <span className='navinfo two'>
                                <BiEnvelope className='navicon' /> info@perfcreg.org
                            </span>

                            <span className='navinfo two'>
                                <BiPhone className='navicon' /> +234 803 4605 723
                            </span>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="d-flex justify-content-end">
                            <span className='officeinfo'>
                                <HiOutlineClock className='navicon' /> Office hours: 8:00 AM - 4:45 PM
                            </span>

                            <div className="d-flex align-items-center icons">
                                <span className="icon">
                                    <FaFacebookF />
                                </span>

                                <span className="icon">
                                    <FaTwitter />
                                </span>

                                <span className="icon">
                                    <FaLinkedinIn />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
