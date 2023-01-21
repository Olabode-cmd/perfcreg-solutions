import React from 'react'
import { HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi'
import { BiEnvelope } from 'react-icons/bi'

export default function Sectioncontact() {
  return (
    <section className="section-contact" id="contact">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h4 className="tag">contact us</h4>
                    <h1 className='title'>Lorem, ipsum dolor sit amet adipisicing elit.</h1>

                    <form action="#">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="e.g, John Doe" id="name" className='form-control' />
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="johndoe@gmail.com" id="email" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="number" placeholder="XXX XXXX XXX" id="number" className="form-control" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea className='form-control' placeholder='Please describe what you need...'></textarea>
                        </div>

                        <button type="submit" className='contact-btn'>Send Now</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <div className="contact-info">
                        <div className="contact-pair">
                            <HiOutlineLocationMarker className='contact-icon' />
                            <div>
                                <h1>Location</h1>
                                <p>224, Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.</p>
                            </div>
                        </div>

                          <div className="contact-pair">
                              <HiOutlinePhone className='contact-icon' />
                              <div>
                                  <h1>Make a call</h1>
                                  <p>555 5555 555 <br /> 876 5643 111</p>
                              </div>
                          </div>

                          <div className="contact-pair">
                              <BiEnvelope className='contact-icon' />
                              <div>
                                  <h1>Email</h1>
                                  <p>johndoe@gmail.com <br /> janedoe@gmail.com</p>
                              </div>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
