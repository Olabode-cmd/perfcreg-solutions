import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'


export default function TeamCard({ image, facebook, twitter, linkedin, name, position }) {
    return (
        <div className="col-md-4">
            <div className="shrink">
                <div className="member">
                    <div className="mem-img">
                        <img src={image} />
                    </div>
                    <div className="mem-media">
                        <a href={`https://facebook.com/${facebook}`} className="icon active">
                            <FaFacebookF />
                        </a>
                        <a href={`https://twitter.com/${twitter}`} className="icon">
                            <FaTwitter />
                        </a>
                        <a href={`https://linkedin.com/in/${linkedin}`} className="icon">
                            <FaLinkedinIn />
                        </a>
                    </div>
                    <div className="mem-info">
                        <h3>{name}</h3>
                        <p>{position}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
