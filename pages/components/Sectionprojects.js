import React from 'react'
import Project1 from '../../public/images/project1.jpg'
import Project2 from '../../public/images/project2.jpg'
import Project3 from '../../public/images/project3.jpg'

export default function Sectionprojects() {
    return (
        <section className='section-projects'>
            <div className="container">
                <h4 className="tag">our successful projects</h4>
                <h2 className='title mb-4'>Lorem ipsum dolor sit amet consectetur.</h2>

                <div className="row mt-4">
                    <div className="col-md-4">
                        <div className="project">
                            <img src={Project1.src} className="project-img" />
                            <div className="project-details">
                                <span className="tag">23 July, 2022</span>

                                <div className="info">
                                    <h1>Dauntless GC</h1>
                                    <p>Mobile App</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="project">
                            <img src={Project2.src} className="project-img" />
                            <div className="project-details">
                                <span className="tag">23 July, 2022</span>

                                <div className="info">
                                    <h1>Dauntless GC</h1>
                                    <p>Mobile App</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="project">
                            <img src={Project3.src} className="project-img" />
                            <div className="project-details">
                                <span className="tag">23 July, 2022</span>

                                <div className="info">
                                    <h1>Dauntless GC</h1>
                                    <p>Mobile App</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <div className='text-cta'>
                        <a href="#" className='text-btn'>See More</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
