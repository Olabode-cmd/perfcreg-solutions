import React from 'react'
import Lottie from "lottie-react";
import Item from "../../public/anime/loading.json";


export default function Loading() {
  return (
    <div className="loading-container">
        <h1>Loading/.....</h1>
        <Lottie animationData={Item} loop={true} />
      </div>
  )
}
