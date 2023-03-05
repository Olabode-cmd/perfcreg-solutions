import '@/styles/globals.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Lottie from "lottie-react";
import Loading from "../public/anime/loading.json";
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import $ from 'jquery';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  {router.isFallback && ( <div className="loading-container">
    <Lottie animationData={Loading} loop={true} />
  </div>)}
  return <Component {...pageProps} />

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    AOS.init()
  }, []);
}
