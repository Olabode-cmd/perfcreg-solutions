import React from 'react'
import Saly1 from '../../public/images/Saly-19.png'
import Saly2 from '../../public/images/Saly-36.png'

export default function Sectioncards() {
    return (
        <section className='section-cards'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="d-flex align-items-center cards card-1">
                            <div className="text">
                                <h1>Lorem ipsum dolor sit.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ea accusantium maxime quae minima! Repellendus!</p>
                            </div>

                            <div className="image">
                                <img src={Saly1.src} />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="d-flex align-items-center cards card-2">
                            <div className="text">
                                <h1>Lorem ipsum dolor sit.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ea accusantium maxime quae minima! Repellendus!</p>
                            </div>

                            <div className="image">
                                <img src={Saly2.src} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
