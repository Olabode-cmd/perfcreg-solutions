import React from 'react'
import { HiOutlineLocationMarker, HiOutlineClock } from 'react-icons/hi'
import { BiEnvelope, BiPhone } from 'react-icons/bi'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'

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
                                <span>
                                <a href={`https://twitter.com/perfcreg`} className="icon">
                                    <FaFacebookF />
                                </a>
                                </span>

                                <span>
                                    <a href={`https://twitter.com/perfcreg`} className="icon">
                                        <FaTwitter />
                                    </a>
                                </span>

                                <span>
                                    <a href={`https://www.linkedin.com/company/perfcreg-solutions/`} className="icon">
                                        <FaLinkedinIn />
                                    </a>
                                </span>

                                <span>
                                    <a href={`https://github.com/perfcreg-solutions`} className="icon">
                                        <FaGithub />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
