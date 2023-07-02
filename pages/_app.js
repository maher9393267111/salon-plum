import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css'
import '../styles/flaticon.css'
import "../styles/font-awesome.min.css";
import "../styles/themify-icons.css";
import '../styles/sass/style.scss'
import '../styles/style.css'
import '../styles/global.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/index";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WhatsappIcon from '../components/scrollbar/whatsapp'
import { useState,useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {DefaultSeo} from 'next-seo';
import Head from "next/head";

//import { connect } from "react-redux";
//import { LoadingAction } from "../store/actions/action";

// translate
import { appWithTranslation } from "next-i18next";
import { StateContextProvider } from '@/utils/context'

function MyApp({ Component, pageProps ,props }) {

  useEffect(() => {
    AOS.init({
        duration: 1000,
        delay: 500,
    });
}, []);





  return (
    <>

{/* <DefaultSeo
                title="nourabeautycenter96"
                description="Nourabeauty center Välkommen till Noura beauty centers"
                openGraph={{
                    type: 'website',
                    locale: 'sv',
                    url: 'nourabeautycenter.se',
                    siteName: 'nourabeautycenter',
                    tags: ['clinic', 'bueauty', 'nourabeautycenter' ,'salon' , 'malmo' ,'tato slill' ,'teeth' ],
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            /> */}


<Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1192d3" />
        <meta name="title" content="nourabeautycenter clinic" />
        <meta
          name="description"
          content="nourabeautycenter clinic"
        />
        <meta
          name="keywords"
          content="nourabeautycenter,"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="nourabeautycenter" />
        <meta property="og:locale" content="en-US" />

        {/* <!-- Primary Meta Tags --> */}
        <title>nourabeautycenter clinic </title>
        <meta name="title" content="nourabeautycenter" />
        <meta
          name="description"
          content="nourabeauty center "
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nourabeautycenter.se" />
        <meta property="og:title" content="nourabeautycenter clinic" />
        <meta
          property="og:description"
          content="nourabeautycenter clinic"
        />
        <meta property="og:image" content="meta-tn.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.nourabeautycenter.se" />
        <meta
          property="twitter:title"
          content="nourabeautycenter clinic"
        />
        <meta
          property="twitter:description"
          content="nourabeautycenter clinic"
        />
        <meta property="twitter:image" content="meta-tn.png" />

        <meta
          name="google-site-verification"
          content="nstIYPUM8pyaUUrW69SvgmJkxRRe_hS9tN_VAfzoLeI"
        />
        <title>nourabeautycenter clinic</title>
      </Head>






   
    <Provider store={store}>



      <PersistGate loading={null} persistor={persistor}>
        <StateContextProvider>
        <Component {...pageProps} />
        <ToastContainer />
        <WhatsappIcon/>
        </StateContextProvider>
      </PersistGate>
    </Provider>

</>



  )
}


export default appWithTranslation(MyApp);

