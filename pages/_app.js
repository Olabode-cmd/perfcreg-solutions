import '@/styles/globals.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from 'react';
import $ from 'jquery';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
}
