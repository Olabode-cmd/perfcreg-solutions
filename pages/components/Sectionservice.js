import React from 'react'
import { HiOutlineDesktopComputer, HiOutlineFingerPrint } from 'react-icons/hi'
import { MdMobileFriendly } from 'react-icons/md'
// import  from 'react-icons/tb'

export default function Sectionservice() {
  return (
    <section className='section-service'>
      <div className="container">
        <h4 className="tag">services we provide</h4>
        <h2 className='title'>Lorem ipsum dolor sit amet consectetur.</h2>


        <div className="services">
          <div className="row">
            <div className="col-md-4">
              <div className="service-box">
                <div className="service-title">
                  <HiOutlineDesktopComputer className='service-icon' />
                  <span className='title'>Web Design</span>
                </div>

                <div className="service-content">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quidem culpa vitae nobis qui, beatae earum architecto aspernatur similique unde nulla ex
                    excepturi nemo dolorum suscipit aliquam quibusdam animi molestiae.
                    Ut sit perferendis quaerat exercitationem dolore.
                  </p>

                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-box">
                <div className="service-title">
                  <MdMobileFriendly className='service-icon' />
                  <span className='title'>Lorem Ipdum</span>
                </div>

                <div className="service-content">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quidem culpa vitae nobis qui, beatae earum architecto aspernatur similique unde nulla ex
                    excepturi nemo dolorum suscipit aliquam quibusdam animi molestiae.
                    Ut sit perferendis quaerat exercitationem dolore.
                  </p>

                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-box">
                <div className="service-title">
                  <HiOutlineFingerPrint className='service-icon' />
                  <span className='title'>ipsum lorem</span>
                </div>

                <div className="service-content">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quidem culpa vitae nobis qui, beatae earum architecto aspernatur similique unde nulla ex
                    excepturi nemo dolorum suscipit aliquam quibusdam animi molestiae.
                    Ut sit perferendis quaerat exercitationem dolore.
                  </p>

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
