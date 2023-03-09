import React from 'react'
import Link from 'next/link'

export default function Sectionprojects({data}) {
    return (
        <section className='section-projects'>
            <div className="container">
                <h4 className="tag">our successful projects</h4>
                <h2 className='title mb-4'>Projects we built and delivered successfully</h2>

                <div className="row mt-4">
                {
                        data.length > 0 && data.map((info, index) => (
                
                    <div className="col-md-4">
                        <div className="project">
                            <img src={info.img} className="project-img" />
                            <div className="project-details">
                                <span className="tag">{info.tag}</span>

                                <div className="info">
                                    <h1>{info.title}</h1>
                                    <p>{info.tag}</p>
                                </div>
                            </div>
                        </div>
                    </div>
        ))}

                    
                </div>

                <div className="text-center mt-4">
                    <div className='text-cta'>
                        <Link href="/projects" className='text-btn'>See More</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
