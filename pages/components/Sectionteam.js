import React from 'react'

import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

export default function Sectionteam({children}) {
    return (
        <section className='section-team'>
            <div className="container">
                <h4 className="tag">team members</h4>
                <h2 className='title'>Lorem ipsum dolor sit amet consectetur.</h2>

                <div className="row members">
                    {children}
                </div>
            </div>
        </section>
    )
}
