import React from 'react'
import Image from '../../public/images/leader.jpg'
import Saly7 from '../../public/images/Saly-7.png'
import { BsChevronRight } from 'react-icons/bs'
import Link from 'next/link'

export default function Sectionabout() {
  return (
    <section className='section-about' id="about">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    {/* <div className="img-box">
                        <img src={Image.src} className="about-img" />
                    </div> */}
                    <img src={Saly7.src} />
                </div>
                <div className="col-md-6">
                    <h4 className='tag'>5 Years of experience</h4>
                    <h1>Lorem ipsum dolor sit amet, elit. Quae.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consectetur omnis dolores temporibus earum asperiores, ducimus incidunt illo iste perferendis cumque?
                        Dolor, magni!
                    </p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, molestiae dolorem! 
                        Esse, dolor quas veritatis similique atque voluptatem repellat eius ex officia vel! Eligendi,
                        mollitia quaerat odit dolores ad fuga.
                    </p>

                    <div className='d-flex align-items-center text-cta'>
                    <Link href="/about" className='text-btn'>Read More</Link>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}
