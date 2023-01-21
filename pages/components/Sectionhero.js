import React from 'react'
import Link from 'next/link'

export default function Sectionhero() {
  return (
    <section className='section-hero'>
        {/* <h2>Sectionhero</h2> */}
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 hero-text">
                    <h5>Best Creative Agency</h5>
                    <h1>Creating a better <br /> experience  for you</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <Link href="#about" className="primary-btn mt-4">About Us &nbsp; &rarr;</Link>
                </div>

                <div className="col-md-6">
                    <form action="#">
                        <div className="form-box">
                            <h3>Send a message</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, quibusdam nulla.</p>

                            <div className="form-group">
                                <input type="text" name="name" id="hero_name" placeholder='Name' className='form-control' />
                                <input type="email" name="email" id="hero_email" placeholder='Email' className='form-control' />
                                <textarea name="message" id="hero_message" placeholder='Message' className='form-control'></textarea>
                            </div>

                            <input type="submit" value="Submit Query" className='submit-btn' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}
