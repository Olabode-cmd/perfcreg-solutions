import React from 'react'
import Link from 'next/link'

export default function Projects({props}) {
  return (
      <Link href={props.url}>
          <div className="project">
              <img src={props.img} className="project-img" />
              <div className="project-details">
                  <span className="tag">{props.date}</span>

                  <div className="info">
                      <h1>{props.title}</h1>
                      <p>{props.tag}</p>
                  </div>
              </div>
          </div>
      </Link>
  )
}



