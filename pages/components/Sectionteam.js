import React from 'react'
import Team1 from '../../public/images/team1.jpg'
import Team2 from '../../public/images/team2.jpg'
import Team3 from '../../public/images/team3.jpg'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

export default function Sectionteam() {
    return (
        <section className='section-team'>
            <div className="container">
                <h4 className="tag">team members</h4>
                <h2 className='title'>Lorem ipsum dolor sit amet consectetur.</h2>

                <div className="row members">
                    <div className="col-md-4">
                        <div className="shrink">
                            <div className="member">
                                <div className="mem-img">
                                    <img src={Team1.src} />
                                </div>
                                <div className="mem-media">
                                    <a href="#" className="icon active">
                                        <FaFacebookF />
                                    </a>
                                    <a href="#" className="icon">
                                        <FaTwitter />
                                    </a>
                                    <a href="#" className="icon">
                                        <FaLinkedinIn />
                                    </a>
                                </div>
                                <div className="mem-info">
                                    <h3>John Doe</h3>
                                    <p>CE0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="shrink">
                            <div className="member">
                                <div className="mem-img">
                                    <img src={Team2.src} />
                                </div>
                                <div className="mem-media">
                                    <a href="#" className="icon active">
                                        <FaFacebookF />
                                    </a>
                                    <a href="#" className="icon">
                                        <FaTwitter />
                                    </a>
                                    <a href="#" className="icon">
                                        <FaLinkedinIn />
                                    </a>
                                </div>
                                <div className="mem-info">
                                    <h3>Angela May</h3>
                                    <p>Graphic Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="shrink">
                            <div className="member">
                                <div className="mem-img">
                                    <img src={Team3.src} />
                                </div>
                                <div className="mem-media">
                                    <a href="#" className="icon active">
                                        <FaFacebookF />
                                    </a>
                                    <a href="#" className="icon">
                                        <FaTwitter />
                                    </a>
                                    <a href="#" className="icon">
                                        <FaLinkedinIn />
                                    </a>
                                </div>
                                <div className="mem-info">
                                    <h3>Marjorie Doe</h3>
                                    <p>Project Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
