import React from 'react'
import { HiOutlineDesktopComputer, HiOutlineFingerPrint } from 'react-icons/hi'
import { MdMobileFriendly } from 'react-icons/md'
import Link from 'next/link'
// import  from 'react-icons/tb'

export default function Sectionservice({...children}) {
  return (
    <section className='section-service'>
      <div className="container">
        <h4 className="tag">services we provide</h4>
        <h2 className='title'>Lorem ipsum dolor sit amet consectetur.</h2>


        <div className="services">
          <div className="row">
            {children}
          </div>
        </div>

        <div className="text-center mt-4">
          <div className='text-cta'>
            <Link href="/services" className='text-btn'>See More</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
