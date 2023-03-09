import '@/styles/globals.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import $ from 'jquery';
import {useRouter} from 'next/router';
import Loading from './components/Loading';


export default function App({ Component, pageProps }) {

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeError", (e) => setLoading(false));
    router.events.on("routeChangeStart", (e) => setLoading(false));
    router.events.on("routeChangeComplete", (e) => setLoading(true));
  }, []);

  return (<>
    {loading ? <Loading /> :
      <Component {...pageProps} />
    }
  </>
  )
}


