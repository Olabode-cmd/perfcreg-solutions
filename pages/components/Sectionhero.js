import React from 'react'
import Link from 'next/link'
import TypeWriter from './TypeWriter'

export default function Sectionhero() {
    let msgs = [
    "Welcome to Perfcreg Solutions", 
    "Bienvenido a Perfcreg Solutions", 
    "Bienvenue chez Perfcreg Solutions", 
    "Aki yin, Awa ni Perfcreg Solutions", 
    "Nnọọ, anyị bụ Perfcreg Solutions", 
    "Barka da zuwa, mu ne Perfcreg Solutions"];
    return (
        <section className='section-hero'>
            {/* <h2>Sectionhero</h2> */}
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 hero-text">
                        <TypeWriter messages={msgs} />
                        <p>We are a team of passionate technology specialist's that works together to provide our client's leading cutting-edge technology solutions in Nigeria and Oversea. We specialize in Software Development,
                            Mobile App Development, Virtual Reality, cloud Solution Architecture, Internet of Things among others.</p>
                        <Link href="/about" className="primary-btn mt-4">About Us &nbsp; &rarr;</Link>
                    </div>

                    <div className="col-md-6">
                        <form action="#">
                            <div className="form-box">
                                <h3>Send a message</h3>
                                <p>Upgrade your business with our innovative technology solutions. Contact us now</p>

                                <div className="form-group">
                                    <input type="text" name="name" id="hero_name" placeholder='Name' className='form-control' />
                                    <input type="email" name="email" id="hero_email" placeholder='Email' className='form-control' />
                                    <textarea name="message" id="hero_message" placeholder='Message' className='form-control'></textarea>
                                </div>

                                <input type="submit" value="Submit Now" className='submit-btn' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
