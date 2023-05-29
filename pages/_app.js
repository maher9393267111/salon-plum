import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css'
import '../styles/flaticon.css'
import "../styles/font-awesome.min.css";
import "../styles/themify-icons.css";
import '../styles/sass/style.scss'
import '../styles/style.css'
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

<DefaultSeo
                title="nourabeautycenter"
                description="Next SEO is a plug in that makes managing your SEO easier in Next.js projects."
                openGraph={{
                    type: 'website',
                    locale: 'sv',
                    url: 'nourabeautycenter.se',
                    siteName: 'nourabeautycenter',
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />



   
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

