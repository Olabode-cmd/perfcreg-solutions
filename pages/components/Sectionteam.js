import React from 'react'

import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

export default function Sectionteam({children}) {
    return (
        <section className='section-team'>
            <div className="container">
                <h4 className="tag">Meet The Team</h4>
                <h2 className='title'>Amazing talents with purpose</h2>

                <div className="row members">
                    {children}
                </div>
            </div>
        </section>
    )
}
